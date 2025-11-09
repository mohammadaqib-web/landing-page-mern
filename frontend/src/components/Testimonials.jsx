const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    review:
      "They delivered exactly what we needed — clean UI, fast performance, and a modern feel. The communication was smooth and the final product exceeded our expectations.",
  },
  {
    name: "Aisha Khan",
    role: "Marketing Lead",
    review:
      "Professional, creative, and technically strong. Our website engagement improved noticeably after the redesign. Highly recommended!",
  },
  {
    name: "John David",
    role: "Business Owner",
    review:
      "The team understood our requirements perfectly and built a solution that feels premium. Attention to detail is what impressed me the most.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 data-aos="fade-right" data-aos-offset="200">
          Testimonials
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div
              className="testimonial-card"
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <p className="review">"{t.review}"</p>
              <h4 className="name">{t.name}</h4>
              <span className="role">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
