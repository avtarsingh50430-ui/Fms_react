import React, { useEffect, useState } from "react";
import axios from "axios";

const OwnerFleetSummary = () => {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://isovia.ca/fms_api/api/ownerFleetSummary",
        { withCredentials: true }
      );

      if (Array.isArray(res.data)) {
        setSummary(res.data);
      } else if (Array.isArray(res.data?.summary)) {
        setSummary(res.data.summary);
      } else {
        setSummary([]);
      }
    } catch (err) {
      console.error("Fleet Summary API Error", err);
    } finally {
      setLoading(false);
    }
  };

  const renderValue = (value) => {
    if (value === null || value === undefined) return "-";
    if (typeof value === "object") {
      return JSON.stringify(value);
    }
    return value;
  };

  return (
    <div className="content-wrapper" style={{ minHeight: 440 }}>
      <section className="content-header">
        <h1>
          Owner Fleet Summary <small>Overview</small>
        </h1>
      </section>

      <section className="content">
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Fleet Summary</h3>
          </div>

          <div className="box-body table-responsive">
            {loading ? (
              <p>Loading summary...</p>
            ) : (
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    {summary.length > 0 &&
                      Object.keys(summary[0]).map((key) => (
                        <th key={key}>
                          {key.replace(/_/g, " ").toUpperCase()}
                        </th>
                      ))}
                  </tr>
                </thead>

                <tbody>
                  {summary.length === 0 ? (
                    <tr>
                      <td colSpan="20" align="center">
                        No Data Found
                      </td>
                    </tr>
                  ) : (
                    summary.map((row, index) => (
                      <tr key={index}>
                        {Object.keys(row).map((key) => (
                          <td key={key}>{renderValue(row[key])}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>

          <div className="box-footer">
            <small className="text-muted">
              Total Records: {summary.length}
            </small>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnerFleetSummary;
