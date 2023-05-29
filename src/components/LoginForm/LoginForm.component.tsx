import React, { FC } from 'react';

import { Button, Typography } from '@mui/material';
import { Form, Formik, Field, FieldProps } from 'formik';

import { LoginFormProps } from './LoginForm.types';
import { StyledInput } from './LoginForm.styles';

export const LoginForm: FC<LoginFormProps> = ({ onSubmit, setIsLoading }) => {
  /**
   * function to validate accesstoken entered by user
   * @param {string} value accesstoken entered by the user
   * @returns {string} returns the error string
   */
  const validateAccessToken = (value: string) => {
    let error;
    if (!value) {
      error = 'AccessToken is Required';
    }
    return error;
  };

  return (
    <Formik
      initialValues={{
        accesstoken: '',
      }}
      onSubmit={(values: { accesstoken: string }) => {
        setIsLoading(true);
        onSubmit(values.accesstoken);
      }}
    >
      {({ errors, touched }) => (
        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <Field type="text" name="accesstoken" validate={validateAccessToken}>
            {({ field }: FieldProps) => (
              <StyledInput
                {...field}
                type="text"
                helperText={
                  errors.accesstoken &&
                  touched.accesstoken && (
                    <Typography variant="caption" color="error">
                      {errors.accesstoken}
                    </Typography>
                  )
                }
                autoComplete="off"
                label="Access Token"
              />
            )}
          </Field>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{
              margin: '1rem auto 3rem',
              width: '20%',
            }}
            title="Login"
          >
            <Typography variant="body2"> Login</Typography>
          </Button>
        </Form>
      )}
    </Formik>
  );
};
