import * as React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';

interface MyFormValues {
  firstName: string;
  email: string;
  message: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={{ firstName: '', email: '', message: '' }}
      onSubmit={(values: MyFormValues, actions: any) => {
        setTimeout(() => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 700);
      }}
      validationSchema={SignupSchema}
      render={() => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <p>
                If you received a letter, I'm glad you read it and made it all the way here.
                </p>
                <p>
                  Would you share your thoughts and insights on financial environmental activism?<br />
                  Or would you just like to say hi?<br />
                  Please send away!
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScL0TljzY4imco86gM8jCXA6KDA0_1OUiUSjik-gK8tg6kFig/viewform?embedded=true" width="100%" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  );
};

export default Contact;
