import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as RiIcon from "react-icons/ri";
import { useTimerDispatch } from "../../context/TimerProvider";

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
      className="my-5 w-[90%] mx-auto bg-white rounded-md shadow-md h-[40px] flex"
      onSubmit={formik.handleSubmit}
    >
      <input
        type="text"
        id="title"
        name="title"
        {...formik.getFieldProps("title")}
        placeholder="برای شروع، کار جدید ثبت کن"
        className="h-full outline-none border-none pr-2 rounded-md w-[87%]"
      />
      <button
        disabled={!formik.isValid}
        className={`${
          !formik.isValid ? "opacity-50" : "opacity-100"
        } bg-[#9190d9] text-white border-none rounded-l-md w-[13%] flex items-center justify-center h-full`}
      >
        <RiIcon.RiPencilFill size={22} />
      </button>
    </form>
  );
};

export default TodoForm;
