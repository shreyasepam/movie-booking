import { ChangeEvent, useEffect, useState } from "react";
import ILoginModalProps from "./ILoginModal.props";
import AppButton from "../../appButton";
import LabelInput from "../../labelInput";
import { useAppDispatch, useAppSelector } from "../../../redux/reduxHooks";
import { setLoginModal, setUserDetails } from "../../../redux/slice/loginSlice";
import ModalWrapper from "../ModalWrapper";

const LoginModal: React.FC<ILoginModalProps> = () => {
  const dispatch = useAppDispatch();
  const loginModal = useAppSelector((state) => state.login);

  const [form, setForm] = useState<{
    name: string;
    phone: string;
    email: string;
  }>({
    name: loginModal?.name || "",
    phone: loginModal?.phone || "",
    email: loginModal?.email || "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!loginModal?.isLoggedIn) {
      setForm({
        email: "",
        name: "",
        phone: "",
      });
    }
  }, [loginModal.isLoggedIn]);

  const onClose = () => {
    dispatch(setLoginModal({ isOpen: false }));
  };

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.phone || form.phone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!form.email || !form.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    dispatch(
      setUserDetails({
        ...form,
      })
    );
  };

  return (
    <ModalWrapper
      isOpen={loginModal.isOpen}
      title={` ${loginModal?.isLoggedIn ? "Profile" : " Get started"}`}
      onClose={onClose}
    >
      <div>
        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
          <div className="sm:flex sm:items-start w-full">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <div className="mt-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <LabelInput
                    label="Name"
                    type="text"
                    id="name"
                    value={form.name}
                    name="name"
                    onChange={onHandleChange}
                    error={errors?.name}
                  />
                  <LabelInput
                    label="Phone"
                    type="tel"
                    id="phone"
                    value={form.phone}
                    name="phone"
                    onChange={onHandleChange}
                    error={errors?.phone}
                  />
                  <LabelInput
                    label="Email"
                    type="email"
                    id="email"
                    value={form.email}
                    name="email"
                    onChange={onHandleChange}
                    error={errors?.email}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <AppButton
            classes={{
              root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-blue-base sm:ml-3 sm:w-auto sm:mt-0 sm:w-auto",
              text: "text-sm font-medium text-gray-100 ",
            }}
            title={`${loginModal?.isLoggedIn ? "Update" : "Sign in"}`}
            type="submit"
            onClick={handleSubmit}
          />
          <AppButton
            classes={{
              root: "rounded-md w-full text-white px-3 py-2 flex items-center justify-center bg-red-600 sm:ml-3 sm:w-auto",
              text: "text-sm font-medium text-white",
            }}
            title="Cancel"
            onClick={onClose}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default LoginModal;
