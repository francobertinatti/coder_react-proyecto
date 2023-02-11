import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComp = ({ confirmPurchase, formVis, setFormVis }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataDelFormulario) => {
    confirmPurchase(dataDelFormulario);
  }; // your form submit function which will invoke after successful validation

  const handleClose = () => {
    setFormVis(false);
  };

  return (
    <>
      <Modal show={formVis} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                {...register("nombre", {
                  required: true,
                  minLength: 2,
                })}
                isInvalid={errors?.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.nombre?.type === "required" && (
                  <p>El campo nombre es requerido</p>
                )}
                {errors?.nombre?.type === "minLength" && (
                  <p>El nombre debe superar los 2 caracteres</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { minLength: 3, required: true })}
                isInvalid={errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.email?.type === "minLength" && (
                  <p>El mail tiene que tener minimo 3 caracteres</p>
                )}
                {errors?.email?.type === "required" && (
                  <p>El campo email es requerido</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="number"
                {...register("phone", {
                  min: 1000000000,
                  max: 9999999999,
                  required: true,
                })}
                isInvalid={errors?.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.phone?.type === "min" && (
                  <p>El teléfono debe tener 10 digitos</p>
                )}

                {errors?.phone?.type === "required" && (
                  <p>El campo telefono es requerido</p>
                )}
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerar
            </Button>
            <Button variant="primary" type="submit">
              Confirmar Compra
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default FormComp;
