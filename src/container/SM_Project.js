import React, { useState, useEffect } from "react";
import Layout from './layout';
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import MetricCard from "../components/MetricCard";
import DateInput from "../components/DateInput";
import DataTable from "../components/DataTable";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import smprojectsData from "../assets/json/smprojects.json";


const SM_Project = () => {

    const navigate = useNavigate();

    const smprojectcolumns = [
        { headname: "project name", dbcol: "project_name" },
        { headname: "status", dbcol: "status" },
        { headname: "client name", dbcol: "client_name" },
        { headname: "budget", dbcol: "budget" },
        { headname: "progress", dbcol: "progress" },
        { headname: "total tasks", dbcol: "total_tasks" },
        { headname: "start date", dbcol: "start_date" },
        { headname: "end date", dbcol: "end_date" },
    ];

    return (
        <Layout>
            <div className="d-flex justify-content-between">
                <div className="mt-3 col-md-3">
                    <DateInput
                        label=""
                        type="range"
                        includeTime={false}
                    />

                </div>
                <div className="text-right gap-3 d-flex">
                    <Button buttonType="import" label="Import" />
                    <Button buttonType="export" label="Export" />
                    <Button buttonType="add" onClick={() => navigate("/add-report")} label="Add New" />
                </div>
            </div>
            <DataTable
                id="table"
                columns={smprojectcolumns}
                data={smprojectsData}
                defaultView="table"
                searchable={true}
                filterable={true}
                sortable={true}
                paginated={true}
            />
        </Layout>
    );
}

export default SM_Project;