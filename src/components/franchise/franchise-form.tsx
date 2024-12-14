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
import {countries} from "../../lib/countries";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useForm, FormProvider } from "react-hook-form"

export default function FranchiseForm() {

  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const MOBILE_REGEX = /^\+?[1-9][0-9]{9,11}$/g;

  const methods = useForm()
  const { register } = methods;

  const onSubmit = (data:unknown) => console.log(data)

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

          <form className="flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex gap-4">
              <InputGroup short_code="fname">
                <Input placeholder="First Name" {...register('fname', {required: {value: true, message: "First Name is required"}})}/>
              </InputGroup>
              <InputGroup short_code="lname">
                <Input placeholder="Last Name"  {...register('lname', {required: {value: true, message: "Last Name is required"}})}/>
              </InputGroup>
            </div>

            <div className="flex gap-4">
              <InputGroup short_code="email">
                <Input placeholder="Email Address" {...register('email', {required: {value: true, message: "Last Name is required"}, pattern: {value: EMAIL_REGEX, message: "Email Address is invaild"}})}/>
              </InputGroup>
              <InputGroup short_code="mobile">
                <Input placeholder="Mobile Number" {...register('mobile', {required: {value: true, message: "Mobile Number is required"}, pattern: {value: MOBILE_REGEX, message: "Mobile No. is invalid"}})} type="text"/>
              </InputGroup>
            </div>

            <div className="flex gap-4">
              <InputGroup short_code="country">
                <Select defaultValue="India">
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder="Select Country"/>
                  </SelectTrigger>
                  <SelectContent>
                    {
                      countries.map(country => <SelectItem key={country.name} value={country.value}>{country.name}</SelectItem>)
                    }
                    
                    
                  </SelectContent>
                </Select>
              </InputGroup>
            </div>

            <div className="flex gap-4">
              <InputGroup short_code="state">
                <Input placeholder="State" {...register('state', {required: {value: true, message: "State is required"}})}/>
              </InputGroup>
              <InputGroup short_code="city">
                <Input placeholder="City" {...register('city', {required: {value: true, message: "City is required"}})}/>
              </InputGroup>
            </div>

            <div>
              <Textarea placeholder="How did you hear about us?" className="text-black" {...register('source')}/>
            </div>

            <Button className="xs:w-full md:w-[200px] bg-primaryColor" type="submit">Submit</Button>
          </form>
        </FormProvider>
        </section>
      </div>
    </section>
  );
}
