"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import InputGroup from "../input-group/input-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { countries } from "../../lib/countries";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { FranchiesFormType } from "./email-templeate";
import { sendMail } from "./send-mail";
import { emailSubject, htmlParser } from "@/lib/emailutils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"



export default function FranchiseForm() {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const MOBILE_REGEX = /^\+?[1-9][0-9]{9,11}$/g;
  const { toast } = useToast()

  const methods = useForm<FranchiesFormType>();
  const { register, control, setValue, formState: {errors}, reset } = methods;
  const [loading, setLoading] = useState<boolean>(false)
  

  const onSubmit = async (data: FranchiesFormType) => {
    setLoading(true)
    try{
      
      const html = htmlParser(data)
      const subject = emailSubject(data.fname, data.lname)
      await sendMail({subject: subject, html})
      reset()
      toast({title: "✅ Your application submitted successfully.",
         description: "We will get in touch with you soon.",
         
      })
    }catch(error){
         console.log(error)
         toast({title: "❌ Your application submitting failed",
          description: "Try again later",
          
       })
    }finally {
      setLoading(false)
    }
    
  };

  return (
    <section className="px-6 py-20 flex flex-col md:flex-row gap-8 items-center ">
      <div>
        <Image src="/iris/05.png" alt="05" width={500} height={500} />
      </div>

      <div>
        <header className="mb-6">
          <h2 className="text-primaryColor text-3xl font-bold mb-3">
            Grab the first mover advantage
          </h2>
          <p>
            Contact us today to learn more about this exciting franchise
            opportunity. Let&#39;s create some ‘eye conic’ artwork together.
          </p>
        </header>

        <section>
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-4"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col xs:flex-row gap-4">
                <InputGroup short_code="fname">
                  <Input
                    placeholder="First Name"
                    {...register("fname", {
                      required: {
                        value: true,
                        message: "First Name is required",
                      },
                    })}
                    className={cn(errors.fname && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
                <InputGroup short_code="lname">
                  <Input
                    placeholder="Last Name"
                    {...register("lname", {
                      required: {
                        value: true,
                        message: "Last Name is required",
                      },
                    })}
                    className={cn(errors.lname && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
              </div>

              <div className="flex flex-col xs:flex-row gap-4">
                <InputGroup short_code="email">
                  <Input
                    placeholder="Email Address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email Address is required",
                      },
                      pattern: {
                        value: EMAIL_REGEX,
                        message: "Email Address is invaild",
                      },
                    })}
                    className={cn(errors.email && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
                <InputGroup short_code="mobile">
                  <Input
                    placeholder="Mobile Number"
                    {...register("mobile", {
                      required: {
                        value: true,
                        message: "Mobile Number is required",
                      },
                      pattern: {
                        value: MOBILE_REGEX,
                        message: "Mobile No. is invalid",
                      },
                    })}
                    type="text"
                    className={cn(errors.mobile && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
              </div>

              <div className="flex gap-4">
                <InputGroup short_code="country">
                  <Controller
                    control={control}
                    name="country"
                    defaultValue={"India"}
                    render={({ field}) => (
                      <Select defaultValue="India" {...field} onValueChange={(value) => setValue("country", value)}>
                        <SelectTrigger className="text-white">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem
                              key={country.name}
                              value={country.value}
                            >
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </InputGroup>
              </div>

              <div className="flex flex-col xs:flex-row gap-4">
                <InputGroup short_code="state">
                  <Input
                    placeholder="State"
                    {...register("state", {
                      required: { value: true, message: "State is required" },
                    })}
                    className={cn(errors.state && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
                <InputGroup short_code="city">
                  <Input
                    placeholder="City"
                    {...register("city", {
                      required: { value: true, message: "City is required" },
                    })}
                    className={cn(errors.city && "focus-visible:ring-red-600 ring-2 ring-offset-2 ring-red-600")}
                  />
                </InputGroup>
              </div>

              <div>
                <Textarea
                  placeholder="How did you hear about us?"
                  className="text-black"
                  {...register("source")}
                />
              </div>

              <Button
                className={`xs:w-full md:w-[200px]  ${loading ? "bg-gray-300 text-gray-600" : "bg-primaryColor"}`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </FormProvider>
        </section>
      </div>
      {/* <EmailTemplate {...form_data}/> */}
    </section>
  );
}
