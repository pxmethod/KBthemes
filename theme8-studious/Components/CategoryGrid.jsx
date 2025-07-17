const CategoryGrid = () => {
  const categories = [
    {
      title: "Get Started",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/get-started"
    },
    {
      title: "Accounts",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/accounts"
    },
    {
      title: "Property Listings",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/property-listings"
    },
    {
      title: "User Management",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/user-management"
    },
    {
      title: "Bookings",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/bookings"
    },
    {
      title: "Payments & Invoicing",
      description: "Donec eu felis at libero consequat sagittis a et urna. Cras sit amet velit id nulla tempus dictum.",
      href: "/category/payments"
    }
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.href} 
              className="category-card"
              aria-label={`Browse ${category.title} articles`}
            >
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid; 