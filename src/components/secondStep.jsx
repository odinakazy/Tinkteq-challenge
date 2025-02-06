/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Step 2 schema for validation
const schema = z.object({
  cargoType: z.string().min(1, "Cargo type is required"),
  shipmentDate: z.string().min(1, "Shipment date is required"),
});

const SecondStep = ({ nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    nextStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Cargo Shipment Booking
      </h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Cargo Type
        </label>
        <select
          {...register("cargoType")}
          className="w-full p-2 border rounded-md outline-none"
        >
          <option value="">Select a type</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="clothing">Clothing</option>
        </select>
        {errors.cargoType && (
          <p className="text-red-500 text-xs">{errors.cargoType.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Shipment Date
        </label>
        <input
          type="date"
          {...register("shipmentDate")}
          className="w-full p-2 border rounded-md outline-none"
        />
        {errors.shipmentDate && (
          <p className="text-red-500 text-xs">{errors.shipmentDate.message}</p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/3 p-2 bg-gray-300 text-black rounded-md"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`w-1/3 p-2 rounded-md text-white ${
            isValid
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SecondStep;
