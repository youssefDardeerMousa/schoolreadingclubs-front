import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card, Form as BootstrapForm, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CompleteProfileSupervisor = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('البريد الإلكتروني غير صالح')
      .required('البريد الإلكتروني مطلوب'),
    password: Yup.string()
      .required('كلمة المرور مطلوبة')
      .min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
    phone: Yup.string()
      .required('رقم الهاتف مطلوب')
      .matches(/^[0-9]+$/, 'يجب أن يحتوي على أرقام فقط')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://schoolreadingclubs.vercel.app/api/Supervisor/complete-profile-supervisor', {
        email: values.email,
        password: values.password,
        phone: values.phone
      });

      setAlertVariant('success');
      setAlertMessage(response?.data?.message);
      setShowAlert(true);

      setTimeout(() => {
        navigate('/SchoolsBookClubs/LoginSupervisor');
      }, 2000);

    } catch (error) {
      setAlertVariant('danger');
      setAlertMessage(error.response?.data?.message || 'حدث خطأ أثناء اكمال الملف الشخصي');
      setShowAlert(true);
    }
    setSubmitting(false);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4" style={{ color: '#2c3e50' }}>اكمال الملف الشخصي للمشرف</h2>
              <h2 className="text-center">👨‍🏫</h2>

              {showAlert && (
                <Alert 
                  variant={alertVariant} 
                  onClose={() => setShowAlert(false)} 
                  dismissible
                >
                  {alertMessage}
                </Alert>
              )}

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                  phone: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                  <Form dir="rtl" noValidate onSubmit={handleSubmit}>
                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label className="fs-5">البريد الإلكتروني</BootstrapForm.Label>
                      <BootstrapForm.Control
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && errors.email}
                      />
                      <BootstrapForm.Control.Feedback type="invalid">
                        {errors.email}
                      </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label className="fs-5">كلمة المرور</BootstrapForm.Label>
                      <BootstrapForm.Control
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && errors.password}
                      />
                      <BootstrapForm.Control.Feedback type="invalid">
                        {errors.password}
                      </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                      <BootstrapForm.Label className="fs-5">رقم الهاتف</BootstrapForm.Label>
                      <BootstrapForm.Control
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={touched.phone && errors.phone}
                      />
                      <BootstrapForm.Control.Feedback type="invalid">
                        {errors.phone}
                      </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        className="mb-3 fs-5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'جاري الحفظ...' : 'حفظ البيانات'}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompleteProfileSupervisor;
