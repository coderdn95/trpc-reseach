import Link from "next/link";
import { FormEvent, ChangeEvent, useState } from "react";
import { trpc as t } from "@/utils/trpc";

export default function NewPet() {
  // User is fixed for simplicity
  const initValue = {
      id: 1,
      name: "doggie",
      status: "available"
  };
  const [form, setForm] = useState(initValue);

  // Wrapped around @tanstack/react-query
  // Can also destructure to access
  // isLoading, isError, isSuccess, error and data
  const mutation = t.pet.createPet.useMutation();

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(form);
    setForm(initValue);
  }

  console.log(mutation.data?.response);

  return (
    <div>
      <h1>Create a New Pet</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="id">Id</label>
        <input
          className="text-black"
          type="text"
          id="id"
          name="id"
          value={form.id}
          onChange={handleChange}
        />
        <label htmlFor="name">Name</label>
        <input
          className="text-black"
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="status">Status</label>
        <input
          className="text-black"
          type="text"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {mutation.data?.response && (
        <>
          <h2>
            {mutation.data.response.id}: {mutation.data.response.name}
          </h2>
          <p>{mutation.data.response.id}</p>
        </>
      )}
      <p>
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
