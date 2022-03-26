import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {  Login } from "./domain/Login";
import {  Dashboard } from "./domain/Dashboard";
import {  ScheduleMeeting } from "./domain/ScheduleMeeting";

export function MeetingApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule/:day" element={<ScheduleMeeting />} />
      </Routes>
    </div>
  );
}