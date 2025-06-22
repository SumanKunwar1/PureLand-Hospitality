"use client";

import React, { useState } from "react";
import {
  User,
  MapPin,
  CreditCard,
  Phone,
  Calendar,
  FileText,
  CheckCircle,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  fullName: string;
  email: string;
  address: string;
  citizenshipNo: string;
  issuingDistrict: string;
  sharesCount: string;
  amountPaid: string;
  contactNo: string;
  paymentDate: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  address?: string;
  citizenshipNo?: string;
  issuingDistrict?: string;
  sharesCount?: string;
  amountPaid?: string;
  contactNo?: string;
  paymentDate?: string;
}

const bankDetails = {
  beneficiaryName: "B.T.M.C. Foundation",
  bankName: "NMB Bank",
  swift: "NMBBNPKA",
  accountNo: "2222410016305780",
  branch: "Boudha Branch, Kathmandu, Nepal",
};

export default function SharePurchaseForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    address: "",
    citizenshipNo: "",
    issuingDistrict: "",
    sharesCount: "",
    amountPaid: "",
    contactNo: "",
    paymentDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionError, setSubmissionError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.citizenshipNo.trim())
      newErrors.citizenshipNo = "Citizenship number is required";
    if (!formData.issuingDistrict.trim())
      newErrors.issuingDistrict = "Issuing district is required";
    if (!formData.sharesCount || parseInt(formData.sharesCount) <= 0)
      newErrors.sharesCount = "Valid number of shares is required";
    if (!formData.amountPaid || parseFloat(formData.amountPaid) <= 0)
      newErrors.amountPaid = "Valid amount is required";
    if (!formData.contactNo.trim())
      newErrors.contactNo = "Contact number is required";
    if (!formData.paymentDate)
      newErrors.paymentDate = "Payment date is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill out all required fields correctly.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/api/share-purchase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
          setIsSubmitted(true);
          toast.success("Share purchase recorded successfully!", {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          const errorMessage =
            result.error || result.errors
              ? Object.values(result.errors).join(", ")
              : "Submission failed. Please try again.";
          setSubmissionError(errorMessage);
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        console.error("Submission Error:", error);
        setSubmissionError("An error occurred. Please try again.");
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  const resetForm = (): void => {
    setFormData({
      fullName: "",
      email: "",
      address: "",
      citizenshipNo: "",
      issuingDistrict: "",
      sharesCount: "",
      amountPaid: "",
      contactNo: "",
      paymentDate: "",
    });
    setIsSubmitted(false);
    setErrors({});
    setSubmissionError("");
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <ToastContainer />
      {isSubmitted ? (
        <div className="max-w-2xl mx-auto p-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-emerald-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Acknowledgment Generated Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your share purchase details have been recorded and emailed to you.
            </p>
            <div className="bg-emerald-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-lg mb-4 text-center text-emerald-700">
                Share Purchase Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-medium">Name:</span> {formData.fullName}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {formData.email}
                </div>
                <div>
                  <span className="font-medium">Shares:</span>{" "}
                  {formData.sharesCount}
                </div>
                <div>
                  <span className="font-medium">Amount:</span> NPR{" "}
                  {parseFloat(formData.amountPaid).toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Contact:</span>{" "}
                  {formData.contactNo}
                </div>
                <div>
                  <span className="font-medium">Date:</span>{" "}
                  {formData.paymentDate}
                </div>
              </div>
            </div>
            <button
              onClick={resetForm}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Create New Acknowledgment
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-emerald-50 py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg mb-8 p-8">
              <div className="text-center">
                <div className="flex mb-4 justify-center">
                  <div className="p-4 rounded-full bg-emerald-100">
                    <Image
                      src="/pureland-hospitalitylogo.png"
                      alt="PureLand Logo"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-semibold text-gray-800">
                  PURELAND HOSPITALITY PVT. LTD.
                </h1>
                <p className="text-gray-600 mb-4">KTM-04, KATHMANDU, NEPAL</p>
                <div className="bg-emerald-100 p-4">
                  <h2 className="text-xl font-semibold text-emerald-700">
                    Share Purchase Acknowledgment
                  </h2>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                {/* Shareholder Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <User className="h-5 w-5 mr-2 text-emerald-600" />
                    Shareholder Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.fullName ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="Enter full name"
                      />
                      {errors.fullName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.email ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="Enter email"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contactNo"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.contactNo
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter contact number"
                      />
                      {errors.contactNo && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.contactNo}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.address ? "border-red-400" : "border-gray-300"
                        }`}
                        placeholder="Enter complete address"
                      />
                      {errors.address && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="citizenshipNo"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Citizenship Number *
                      </label>
                      <input
                        type="text"
                        id="citizenshipNo"
                        name="citizenshipNo"
                        value={formData.citizenshipNo}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.citizenshipNo
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter citizenship number"
                      />
                      {errors.citizenshipNo && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.citizenshipNo}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="issuingDistrict"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Issuing District *
                      </label>
                      <input
                        type="text"
                        id="issuingDistrict"
                        name="issuingDistrict"
                        value={formData.issuingDistrict}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.issuingDistrict
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter issuing district"
                      />
                      {errors.issuingDistrict && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.issuingDistrict}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Share Purchase Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-emerald-600" />
                    Share Purchase Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="sharesCount"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Number of Shares *
                      </label>
                      <input
                        type="number"
                        id="sharesCount"
                        name="sharesCount"
                        min="1"
                        value={formData.sharesCount}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.sharesCount
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter number of shares"
                      />
                      {errors.sharesCount && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.sharesCount}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="amountPaid"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Amount Paid (NPR) *
                      </label>
                      <input
                        type="number"
                        id="amountPaid"
                        name="amountPaid"
                        min="0"
                        step="0.01"
                        value={formData.amountPaid}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.amountPaid
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter amount paid"
                      />
                      {errors.amountPaid && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.amountPaid}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="paymentDate"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Payment Date *
                      </label>
                      <input
                        type="date"
                        id="paymentDate"
                        name="paymentDate"
                        value={formData.paymentDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                          errors.paymentDate
                            ? "border-red-400"
                            : "border-gray-300"
                        }`}
                      />
                      {errors.paymentDate && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.paymentDate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bank Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-emerald-600" />
                    Payment Instructions
                  </h3>
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <p className="text-sm text-amber-700 mb-4">
                      Please transfer the specified amount to the following bank
                      account to complete your share purchase.
                    </p>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <p>
                        <strong>Beneficiary Name:</strong>{" "}
                        {bankDetails.beneficiaryName}
                      </p>
                      <p>
                        <strong>Bank Name:</strong> {bankDetails.bankName}
                      </p>
                      <p>
                        <strong>SWIFT:</strong> {bankDetails.swift}
                      </p>
                      <p>
                        <strong>Account No:</strong> {bankDetails.accountNo}
                      </p>
                      <p>
                        <strong>Branch:</strong> {bankDetails.branch}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  {submissionError && (
                    <p className="text-red-500 text-center mb-4">
                      {submissionError}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-full focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 transition-colors"
                  >
                    Generate Share Purchase Acknowledgment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
