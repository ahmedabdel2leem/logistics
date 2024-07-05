function BackGroundVideo() {

    return (
        <div>
            <div className="-z-10  relative top-0 right-0 w-full h-full ">
                <video autoPlay loop muted className="w-full max-h-dvh h-dvh object-cover transform -scale-x-100">
                    <source src="https://s3-figma-videos-production-sig.figma.com/video/1141294035809122203/TEAM/bc09/e8d2/-7f7b-4f91-876c-24c5a4e367ec?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEB5URkpt6z1XnutPqUR6XBbgPy-7rY9Lomv6qS7cuVdQu~tvwke55tAl25u6mAZMEA1jKb4AVXbsR-pk45zTRGZLxGsF-FUboEjiqL3nofrbZzwXvGGn-JL9NO1t5ZUpSqe8mQOP7rb7UqWIMOTGrUtbfsU0eX~EElMDjVTcO9ejFtHcT-DzfYaJvLVT5jVxLMEXXR1p7UGRufD4xuppKClFo5Ndt1bxyTPhR5G2Ye4yjh0P2DepeoKChRgK3BJDRvMxU~zetp-lVHnGtvJdP8cyVy9VVYtIN7TmvCPQf78gaCngvoHaihXRL5T6Dgl4RjXVgB8w-5---mYyjYSBQ__" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default BackGroundVideo