import DomainsCompo from "./DomainsCompo";


const Domain = () => {


    const domainsObject =
        [
            {
                title: "Domain - 1",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5']
            },
            {
                title: "Domain - 2",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5']
            },
            {
                title: "Domain - 3",
                subDomains: ['SD - 1', 'SD - 2', 'SD - 3', 'SD - 4', 'SD - 5', 'SD - 4', 'SD - 5']
            },
        ]

    const keys = [1, 2, 3]
    return (
        <div className="domains">
            <h1 className="text-center text-2xl md:text-3xl  lg:text-4xl font-bold text-ourBlue 
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