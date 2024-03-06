import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et libero venenatis.',
      company: 'ABC Inc.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      company: 'XYZ Corp.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="overflow-x-auto max-w-screen-lg mx-auto py-8">
      <div className="flex flex-nowrap space-x-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-96 bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <p className="text-gray-600 font-semibold">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
