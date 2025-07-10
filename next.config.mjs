import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: ['cuelnhbrslvcmhqpljgy.supabase.co'],
  },
};

export default withFlowbiteReact(nextConfig);