// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Link from "next/link";

// export default async function Home() {
//     const {
//         getAccessToken,
//         getBooleanFlag,
//         getFlag,
//         getIdToken,
//         getIntegerFlag,
//         getOrganization,
//         getPermission,
//         getPermissions,
//         getRoles,
//         getStringFlag,a
//         getUser,
//         getUserOrganizations,
//         isAuthenticated
//     } = getKindeServerSession();


//     // console log the user name only
//     const namex = getUser: () => Promise<email>;
//     console.log(namex);
//     // console.log(getUser: () => Promise<given_name>;);

//     return (
//         <div className="container">
//             <div className="card hero">
//                 <p className="text-display-1 hero-title">
//                     Let’s start authenticating <br /> with KindeAuth
//                 </p>
//                 <p className="text-body-1 hero-tagline">Configure your app</p>

//                 <Link
//                     href="https://kinde.com/docs/sdks/nextjs-sdk"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="btn btn-light btn-big"
//                 >
//                     Go to docs
//                 </Link>
//             </div>
//         </div>
//     );
// }