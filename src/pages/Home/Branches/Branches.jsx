
import branch1 from "../../../assets/branch1.png";
import branch2 from "../../../assets/branch2.png";
import branch3 from "../../../assets/branch3.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Branches = () => {
    const branches = [
        {
            id: 1,
            name: "Branch 1",
            location: "Dhaka",
            image: branch1,
            streetNumber: "123 Elefant Road",
            contactInfo: "Phone: (555) 123-4567, Email: branch1@dhaka.com"
        },
        {
            id: 2,
            name: "Branch 2",
            location: "Chittagong",
            image: branch2,
            streetNumber: "456 Agrabad Road",
            contactInfo: "Phone: (555) 987-6543, Email: branch2@chittagong.com"
        },
        {
            id: 3,
            name: "Branch 3",
            location: "Rangpur",
            image: branch3,
            streetNumber: "789 Shapla chattar",
            contactInfo: "Phone: (555) 789-1234, Email: branch3@Rangpur.com"
        },
    ];

    return (
        <div className="container mx-auto">
            {/* <h2 className="mt-6 text-4xl font-extrabold">Our Branches</h2> */}
            <SectionTitle heading={"Our Branches"} subHeading={"Visit Our Branches"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {branches.map(branch => (
                    <div key={branch.id} className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src={branch.image}
                            alt={branch.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h5 className="text-xl font-semibold">{branch.name}</h5>
                            <p className="text-gray-600">{branch.location}</p>
                            <p><strong>Street Number:</strong> {branch.streetNumber}</p>
                            <p><strong>Contact Info:</strong> {branch.contactInfo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branches;
