/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Step 1 schema for validation
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
});

const FirstStep = ({ nextStep, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: formData,
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
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 border rounded-md outline-none"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 border rounded-md outline-none"
          placeholder="Your email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full p-2 rounded-md text-white ${
          isValid
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </form>
  );
};

export default FirstStep;
