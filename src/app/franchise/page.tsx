import Container from "@/components/container/container";
import FranchiseForm from "@/components/franchise/franchise-form";
import FranchiseHeader from "@/components/franchise/franchise-header";
import WhyChoose from "@/components/franchise/why-choose";




export default function FranchisePage() {
  return (
    <section>
      <FranchiseHeader />
        <WhyChoose />
      <Container>
        <FranchiseForm />
      </Container>
    </section>
  );
}
