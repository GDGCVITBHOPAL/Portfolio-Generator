import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';

const sleep = () => new Promise((acc) => setTimeout(acc, 3000));

export default function Home() {
  return (
    <div style={{display:'flex', justifyContent:'center', background:'#dddfff', width:'webit-fill-available' , height:'100vh',alignItems:'center'}}>
    <Card style={{display:'flex', justifyContent:'center'}}>
      <CardContent>
        <FormikStepper
          initialValues={{
            firstName: '',
            lastName: '',
            social:{
              'email':'',
              'linkedin':'',
              'github':'',
              'twitter':'',
              'instagram':'',
            },
            skills:[],
            githubToken:'',
            resume:'',
            roles:['','',''],
            description: '',
          }}
          onSubmit={async (values) => {
            await sleep();
            console.log('values', values);
          }}
        >
          <FormikStep label="Personal Data">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth  required name="firstName" component={TextField} label="First Name" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="lastName" component={TextField} label="Last Name" />
            </Box>
          </FormikStep>

          <FormikStep label="Roles">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="roles[0]" component={TextField} label="Role 1" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="roles[1]" component={TextField} label="Role 2" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="roles[2]" component={TextField} label="Role 3" />
            </Box>
          </FormikStep>

          <FormikStep label="Socials">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required  type="email" name="social.email" component={TextField} label="E-Mail" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="social.linkedin" component={TextField} label="LinkedIn" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.github" component={TextField} label="GitHub (Optional)" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.twitter" component={TextField} label="Twitter (Optional)" />
            </Box>
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="social.instagram" component={TextField} label="Instagram (Optional)" />
            </Box>
          </FormikStep>

          <FormikStep label="Skills">
              {/* To prepare a  list of skills to choose from and thn add chosen to skills variable.*/}
          </FormikStep>

          <FormikStep label="GitHub-Token">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="githubToken" component={TextField} label="Github Token"/>
            </Box>
          </FormikStep>

          <FormikStep label="Resume">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth required name="resume" component={TextField} label="Resume Link"/>
            </Box>
          </FormikStep>

          <FormikStep label="More Info">
            <Box style={{paddingBottom:'1rem'}}>
              <Field fullWidth name="description" component={TextField} label="Description" />
            </Box>
          </FormikStep>

        </FormikStepper>
      </CardContent>
    </Card>
    </div>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2} style={{paddingTop:'2rem'}}>
            {step > 0 ? (
              <Grid item>
                <Button
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}