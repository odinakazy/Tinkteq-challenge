import { useState } from "react";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";

const BookingForm = () => {
  const [step, setStep] = useState(1);

  // Form data state (can be submitted at the end)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cargoType: "",
    shipmentDate: "",
    price: 0,
  });

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white shadow-lg rounded-md">
        {step === 1 && <FirstStep nextStep={nextStep} formData={formData} />}
        {step === 2 && <SecondStep nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && (
          <ThirdStep
            formData={formData}
            setStep={setStep}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default BookingForm;
