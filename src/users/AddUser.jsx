import {useParams} from "react-router-dom";

const AddUser = () => {
    const {userId} = useParams();

return(
    <div className="row justify-content-center mt-5 ">
        <div className="col-9">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {userId ? "ویرایش کاربر" : "افزودن کاربر جدید"}
                    </h4>

                    <div className="form-group row mt-4">
                        <label htmlFor="name" className="col-md-2 col-form-label">نام و نام خانوادگی</label>
                        <div className="col-md-10">
                            <input className="form-control" type="text"  id="name"/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label htmlFor="username" className="col-md-2 col-form-label">نام کاربری</label>
                        <div className="col-md-10">
                            <input className="form-control" type="text"  id="username"/>
                        </div>
                    </div>

                    <div className="form-group row mt-3">
                        <label htmlFor="email" className="col-md-2 col-form-label">ایمیل</label>
                        <div className="col-md-10">
                            <input className="form-control" type="text"  id="email"/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-end mt-3">
                        <label htmlFor="address" className="col-md-2 col-form-label">آدرس</label>
                        <div className="col-md-5">
                            <input className="form-control" type="text" placeholder="شهر"  id="address"/>
                        </div>
                        <div className="col-md-5 ">
                            <input className="form-control" type="text" placeholder="خیابان"  id="address"/>
                        </div>
                        <div className="col-md-5 mt-4">
                            <input className="form-control" type="text" placeholder="ادامه آدرس"  id="address"/>
                        </div>
                        <div className="col-md-5 mt-4">
                            <input className="form-control" type="text" placeholder="کد پستی"  id="address"/>
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-content-end mt-4">
                        <button type="button" className="btn btn-outline-danger w-md mx-2 ">بازگشت</button>
                        <button type="button" className="btn btn-outline-info w-md ">
                            {userId ? "ویرایش " : "افزودن"}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
)
}

export default AddUser;