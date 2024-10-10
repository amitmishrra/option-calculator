import Header from "../Header/Header"

const CommonContainer = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div className="bg-red h-[100vh]">
                {children}
            </div>
        </>
    )
}

export default CommonContainer