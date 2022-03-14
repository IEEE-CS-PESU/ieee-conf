import DomainsCompo from "./DomainsCompo";
import netPic from '../media/net.jpg'

const Domain = () => {


    const domainsObject =
        [
            {
                title: "Computer Science",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5']
            },
            {
                title: "Electronics",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5']
            },
            {
                title: "Robotics & Automation",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5', 'SD - 4', 'SD - 5']
            },
        ]

    const keys = [1, 2, 3]
    return (
        <div className="domains bg-slate-50">

            <h1 className="text-center pt-10 text-2xl md:text-3xl  lg:text-4xl font-bold text-[#523891]
            uppercase mb-6"><span className="underline">
                    Do</span>
                mains</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    keys.map((item) => {
                        return <DomainsCompo key={item} obj={domainsObject[item - 1]} />
                    })
                }
            </div>
        </div>
    );
}

export default Domain;