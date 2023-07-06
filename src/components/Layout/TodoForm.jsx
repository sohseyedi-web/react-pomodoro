import { useFormik } from "formik";
import * as Yup from "yup";
import { useTimerDispatch } from "../../context/TimerProvider";
import { toast } from "react-hot-toast";

const initialValues = {
  title: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("مقداری وارد نشده است"),
});

const TodoForm = () => {
  const dispatch = useTimerDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch({ type: "ADD_TODO", payload: values });
    resetForm();
    toast.success("ثبت شد");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <form
      className="card flex items-center justify-between"
      onSubmit={formik.handleSubmit}
    >
      <input
        type="text"
        id="title"
        name="title"
        {...formik.getFieldProps("title")}
        className="w-[75%] bg-transparent text-lg border-none placeholder:text-gray-100 placeholder:opacity-50 outline-none px-2 text-white"
        placeholder="برای شروع، کار جدید ثبت کن"
      />
      <button
        disabled={!formik.isValid}
        className={`${
          !formik.isValid ? "opacity-50" : "opacity-100"
        } w-[18%] ml-2 transition-all duration-300 h-[35px] bg-gray-900 text-white hover:bg-gray-800 shadow rounded font-semibold`}
      >
        ثبت
      </button>
    </form>
  );
};

export default TodoForm;
