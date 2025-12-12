function TextBox() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-4 md:p-8 max-w-140 md:items-start md:gap-6">
      <p className="text-heading-main text-3xl md:text-4xl font-semibold animate-fade-in-right">
        Simple booking
      </p>
      <p className="text-subheading max-w-100 text-sm md:text-lg text-center lg:text-lg md:text-left lg:max-w-100 animate-fade-in ">
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </div>
  );
}

export default TextBox;
