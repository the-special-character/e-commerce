"use client";

import React from "react";

type Props = {
  pages: number;
};

const Pagination = ({ pages }: Props) => {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      customerId: formData.get("page"),
    };

    console.log(rawFormData);

    // mutate data
    // revalidate cache
  }

  return (
    <form action={nextPage}>
      {[...Array(pages).keys()].map((x, i) => {
        return (
          <div key={i}>
            <input type="number" max={pages} name="page" id="page" />
            <button type="submit">Go to page</button>
          </div>
        );
      })}
    </form>
  );
};

export default Pagination;
