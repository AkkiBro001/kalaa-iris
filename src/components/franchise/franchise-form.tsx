"use client";
import Image from "next/image";
import React from "react";
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

export default function FranchiseForm() {
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
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <InputGroup>
                <Input placeholder="First Name" />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Last Name" />
              </InputGroup>
            </div>

            <div className="flex gap-4">
              <InputGroup>
                <Input placeholder="Email Address" />
              </InputGroup>
              <InputGroup>
                <Input placeholder="Phone Number" />
              </InputGroup>
            </div>

            <div className="flex gap-4">
              <InputGroup>
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
              <InputGroup>
                <Input placeholder="State" />
              </InputGroup>
              <InputGroup>
                <Input placeholder="City" />
              </InputGroup>
            </div>

            <div>
              <Textarea placeholder="How did you hear about us?" className="text-black"/>
            </div>

            <Button className="xs:w-full md:w-[200px]" type="submit">Submit</Button>
          </form>
        </section>
      </div>
    </section>
  );
}
