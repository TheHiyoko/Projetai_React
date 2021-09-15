import React from "react";
import { Container } from "react-bootstrap";
import CompaniesComponent from "./sectionCompanies";
import TimeComponent from "./sectionTime";
import StudentsComponent from "./sectionStudents";
import IndexMainComponent from "./sectionMain";

export default function IndexPage() {
    return (
        <>
            <Container className="pt-3">
                <IndexMainComponent />
                <StudentsComponent/>
                <CompaniesComponent />
                <TimeComponent />
            </Container>
        </>
    )
}