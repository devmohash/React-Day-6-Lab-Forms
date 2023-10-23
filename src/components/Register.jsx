import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Register.css";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { DevTool } from "@hookform/devtools";

const Register = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const options1 = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  console.log(errors);
  return (
    <section className="form_section  bg-secondary">
      <div className="container d-flex justify-content-center">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column align-items-center w-50 border rounded py-4"
        >
          <Form.Group as={Col} md="6" className="mb-4">
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Please select an option" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                  ]}
                />
              )}
            />
            <span className="text-danger fw-bold">
              {errors.gender &&
                errors.gender.type === "required" &&
                "Please select"}
            </span>
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <Controller
              name="hobbies"
              control={control}
              rules={{ required: "Please select an option" }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={[
                    { value: "Reading", label: "Reading" },
                    { value: "playstation", label: "playstation" },
                    { value: "Shopping", label: "Shopping" },
                  ]}
                />
              )}
            />
            <span className="text-danger fw-bold">
              {errors.hobbies &&
                errors.hobbies.type === "required" &&
                "Please select"}
            </span>
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <Form.Control
              type="text"
              placeholder="First name"
              {...register("firstname", {
                required: true,
              })}
            />
            {errors?.firstname?.type === "required" && (
              <span className="fw-bold text-danger ">
                This field is required
              </span>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <Form.Control
              type="text"
              placeholder="Last name"
              {...register("lastname", { required: true })}
            />
            {errors?.lastname?.type === "required" && (
              <span className="fw-bold text-danger">
                This field is required
              </span>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Username"
                {...register("username", { required: true, maxLength: 20 })}
              />
            </InputGroup>
            {errors?.username?.type === "required" && (
              <span className="fw-bold text-danger ">
                This field is required
              </span>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </InputGroup>
            {errors?.email?.type === "required" && (
              <span className="fw-bold text-danger ">
                This field is required
              </span>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4">
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </InputGroup>
            {errors?.password?.type === "required" && (
              <span className="fw-bold text-danger ">
                This field is required
              </span>
            )}
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-4">
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                {...register("confirmpassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      <span className="fw-bold text-danger ">
                        password doesn't match
                      </span>;
                    }
                  },
                })}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3 d-flex"></Form.Group>
          <Button type="submit">Submit</Button>
          <DevTool control={control}></DevTool>
        </Form>
      </div>
    </section>
  );
};

export default Register;
