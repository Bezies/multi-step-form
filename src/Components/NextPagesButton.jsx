import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Validation } from "../features/personalValidation";

export default function NextPagesButton({ name, mail, phone }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(Validation({ name: name, mail: mail, phone: phone }))
      }
      className="bg-blue-900 text-white rounded px-4 py-2 mt-10"
    >
      Next Step
    </button>
  );
}