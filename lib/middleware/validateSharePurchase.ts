import { ISharePurchase } from "../interfaces/ISharePurchase";

export function validateSharePurchase(data: ISharePurchase) {
  const errors: Partial<ISharePurchase> = {};

  if (!data.fullName?.trim()) errors.fullName = "Full name is required";
  if (!data.email?.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(data.email))
    errors.email = "Invalid email format";
  if (!data.address?.trim()) errors.address = "Address is required";
  if (!data.citizenshipNo?.trim())
    errors.citizenshipNo = "Citizenship number is required";
  if (!data.issuingDistrict?.trim())
    errors.issuingDistrict = "Issuing district is required";
  if (!data.sharesCount || parseInt(data.sharesCount) <= 0)
    errors.sharesCount = "Valid number of shares is required";
  if (!data.amountPaid || parseFloat(data.amountPaid) <= 0)
    errors.amountPaid = "Valid amount is required";
  if (!data.contactNo?.trim()) errors.contactNo = "Contact number is required";
  if (!data.paymentDate) errors.paymentDate = "Payment date is required";

  return errors;
}
