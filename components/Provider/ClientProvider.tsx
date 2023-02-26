"use client";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Toaster } from "react-hot-toast";
const ClientProvider = () => {
  return (
    <>
      <Toaster position="top-right" />
    </>
  );
};

export default ClientProvider;
