import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cards = () => {
  useEffect(() => {
    getData();
  }, []);

  const [number, setNumber] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:8000/api/teacher_count");
    console.log(res.data);
    setNumber(res.data);
  };

  return (
    <>
    <Link to="/list/teachers">
      <div style={{ width: "18rem" }}>
        <Card className="card-stats mb-4 mb-lg-0">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle className="text-uppercase text-muted mb-0">
                  Total Teacher
                </CardTitle>
                <span className="h2 font-weight-bold mb-0">{number}</span>
              </div>
              <Col className="col-auto">
                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i className="fas fa-chart-bar" />
                </div>
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              <span className="text-success mr-2">
                <i className="fa fa-arrow-up" />
                3.48%
              </span>
              <span className="text-nowrap">Since last week</span>
            </p>
          </CardBody>
        </Card>
      </div>
      </Link>
    </>
  );
};

export default Cards;
