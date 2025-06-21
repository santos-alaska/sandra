import React from 'react';

// Data for the membership tiers to keep the component clean
const membershipTiers = [
  {
    name: "Bronze Card",
    price: "$50/year",
    details: "Newsletter, shoutouts"
  },
  {
    name: "Silver Card",
    price: "$100/year",
    details: "Above + exclusive photos, wallpapers"
  },
  {
    name: "Gold Card",
    price: "$200/year",
    details: "All above + Fan Zoom invites"
  },
  {
    name: "VIP Black",
    price: "$500/year",
    details: "All above + Sandra-autographed merch lottery"
  }
];

const MembershipSection = () => {
  return (
    <section className="bg-[#f8f9fa] w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-800">
            Become a Member
          </h2>
          <p className="mt-4 max-w-xl text-base text-gray-600 leading-relaxed">
            Join the community and unlock exclusive fan content, early access to meet & greet info, and personalized membership cards.
          </p>
        </div>

        {/* Membership Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-lg p-8">
          <h3 className="text-xl font-medium text-center text-gray-800">
            Membership Cards
          </h3>
          <hr className="my-6 border-gray-200" />
          
          <ul className="space-y-4">
            {membershipTiers.map((tier) => (
              <li key={tier.name} className="flex text-sm">
                <span className="text-gray-400 mr-3">•</span>
                <span className="text-gray-700">
                  <span className="font-semibold">{tier.name}</span> - {tier.price} ({tier.details})
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-center text-gray-500 mt-8">
            Digital delivery included. Physical card optional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;