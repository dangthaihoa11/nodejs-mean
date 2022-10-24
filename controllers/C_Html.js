const Admin = require('./C_Admin')

class Html extends Admin {
    navbar() {
        var str = '';

        // 1. common info
        str += this.conmon_info();

        // 2. list module
        str += this.navbar_module_list();

        // 3. upgrade
        //str += this.upgrade();

        return str;
    }

    conmon_info() {
        return `<div class="">
            <div class="main-menu-header">
                <img class="img-radius" src="/assets/images/user/avatar-2.jpg" alt="User-Profile-Image">
                <div class="user-details">
                    <div id="more-details">UX Designer <i class="fa fa-caret-down"></i></div>
                </div>
            </div>
            <div class="collapse" id="nav-user-link">
                <ul class="list-unstyled">
                    <li class="list-group-item"><a href="user-profile.html"><i class="feather icon-user m-r-5"></i>View Profile</a></li>
                    <li class="list-group-item"><a href="#!"><i class="feather icon-settings m-r-5"></i>Settings</a></li>
                    <li class="list-group-item"><a href="auth-normal-sign-in.html"><i class="feather icon-log-out m-r-5"></i>Logout</a></li>
                </ul>
            </div>
        </div>`;
    }

    navbar_module_list(array = []) {
        var str = '';

        array = [
            { name: 'Bảng Điều Khiển', slug: 'dashboards', icon: 'home' },
            { name: 'Danh Mục', slug: 'categories', icon: 'align-justify' },
            { name: 'Sản Phẩm', slug: 'products', icon: 'shopping-cart' },
            { name: 'Thành Viên', slug: 'users', icon: 'users' },
        ];

        str += '<ul class="nav pcoded-inner-navbar">';

        array.forEach(e => {
            // xét active
            var active = (this.module_name() == e.slug) ? 'active' : '';

            str += `<li class="nav-item ` + active + `">
                <a href="/admin/` + e.slug + `/index" class="nav-link ">
                    <span class="pcoded-micon">
                        <i class="feather icon-` + e.icon + `"></i>
                    </span>
                    <span class="pcoded-mtext">` + e.name + `</span></a>
            </li>`;
        })

        str += '</ul>';

        return str;
    }

    upgrade() {
        return `<div class="card text-center">
            <div class="card-block">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <i class="feather icon-sunset f-40"></i>
                <h6 class="mt-3">Download Pro</h6>
                <p>Getting more features with pro version</p>
                <a href="https://1.envato.market/qG0m5" target="_blank" class="btn btn-primary btn-sm text-white m-0">Upgrade Now</a>
            </div>
        </div>`;
    }

    pcoded_content(type) {
        var str = '';

        str += '<section class="pcoded-main-container">';
        str += '<div class="pcoded-content">';

        // 1. breadcrumbs
        str += this.breadcrumbs();

        // 3. card-body
        str += this.card_body(type);

        // 4. pagination
        //str += this.pagination();

        str += '</div></section>';

        return str;
    }

    search() {

    }

    pagination() {

    }

    table() {
        var str = '';

        str += '<div class="row">';
        str += '<div class="col-xl-12">';
        str += '<div class="card">';

        // 2. card-header
        str += this.card_header();

        str += `<div class="card-body table-border-style">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" class="btn btn-outline-info has-ripple">
                                    <i class="fa fa-edit"></i> Sửa
                                </button>
                                <button type="button" class="btn btn-outline-danger has-ripple">
                                    <i class="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <button type="button" class="btn btn-outline-info has-ripple">
                                    <i class="fa fa-edit"></i> Sửa
                                </button>
                                <button type="button" class="btn btn-outline-danger has-ripple">
                                    <i class="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                                <button type="button" class="btn btn-outline-info has-ripple">
                                    <i class="fa fa-edit"></i> Sửa
                                </button>
                                <button type="button" class="btn btn-outline-danger has-ripple">
                                    <i class="fa fa-trash"></i> Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`;

        str += '</div></div></div>';

        return str;
    }

    form() {
        var str = '';

        str += '<div class="row">';
        str += '<div class="col-xl-12">';
        str += '<div class="card">';


        str += `<div class="card-body">
        <form id="formData">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="name">Họ và Tên</label>
                    <input type="text" class="form-control" id="name" placeholder="Ví Dụ: Nguyễn Văn A">
                    <span class="error error_name"></span>
                    
                </div>
                <div class="form-group col-md-6">
                    <label for="username">Tên Đăng Nhập</label>
                    <input type="text" class="form-control" id="username" placeholder="Ví Dụ: nguyenvana">
                    <span class="error error_username"></span>

                </div>
                <div class="form-group col-md-6">
                    <label for="passwd">Mật Khẩu</label>
                    <input type="password" class="form-control" id="passwd">
                    <span class="error error_password"></span>

                </div>
                <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Ví Dụ: nguyenvana@gmail.com">
                    <span class="error error_email"></span>

                </div>
                <div class="form-group col-md-6">
                    <label for="phone">Số Điện Thoại</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Ví Dụ: 038.555.1234">
                    <span class="error error_phone"></span>

                </div>
                <div class="form-group col-md-6">
                    <label for="address">Địa Chỉ</label>
                    <input type="text" class="form-control" id="address" placeholder="Ví Dụ: 22 Phạm Văn Đồng">
                    <span class="error error_address"></span>

                </div>
                <div class="form-group col-md-6">
                    <label for="province">Tỉnh/ Thành Phố</label>
                    <select id="province" class="form-control">
                        <option value="">-Chọn-</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="district">Quận/ Huyện</label>
                    <select id="district" class="form-control">
                        <option value="">-Chọn-</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="wards">Phường/ Xã</label>
                    <select id="wards" class="form-control">
                        <option value="">-Chọn-</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">
                <i class="fa fa-save"></i>
                Đăng Ký</button>
            <a href="/admin/` + this.module_name() + `/index" class="btn  btn-secondary">Thoát</a>
        </form></div>`;

        str += '</div></div></div>';

        return str;
    }

    card_body(type) {
        var str = '';

        if (type == 'table') {
            // bảng dữ liệu
            str += this.table();
        } else if (type == 'form') {
            // form
            str += this.form();
        } else if (type == 'dashboard') {
            // form
            str += this.dashboard();
        }

        return str;
    }

    card_header() {
        return `<div class="card-header">
            <a href="/admin/` + this.module_name() + `/add" class="btn btn-outline-primary has-ripple">
                <i class="fa fa-plus"></i>
                Thêm Mới
            </a>
        </div>`;
    }

    page_header_title() {

    }

    change_title(key) {
        var str = '';

        switch (key) {
            case 'users':
                str = 'Thành Viên';
                break;
            case 'categories':
                str = 'Danh Mục';
                break;
            case 'products':
                str = 'Sản Phẩm';
                break;
            case 'dashboards':
                str = 'Bảng Điều Khiển';
                break;
            case 'add':
                str = 'Thêm Mới';
                break;
            case 'edit':
                str = 'Chỉnh Sửa';
                break;

            default:
                str = 'Chưa Đặt Tên';
                break;
        }

        return str;
    }

    breadcrumb_name() {
        var str = '';

        if (this.function_name() == 'index') {
            str = 'Bảng Dữ Liệu';
        } else {
            str = this.change_title(this.function_name());
        }

        return str;
    }

    breadcrumbs() {
        return `<div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">
                                ` + this.change_title(this.module_name()) + `
                            </h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/admin/dashboards/index">
                                <i class="feather icon-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#!">
                                    ` + this.breadcrumb_name() + `
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }

    dashboard() {
        return `<div class="row">
            <div class="col-lg-7 col-md-12">
                <!-- support-section start -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card support-bar overflow-hidden">
                            <div class="card-body pb-0">
                                <h2 class="m-0">350</h2>
                                <span class="text-c-blue">Support Requests</span>
                                <p class="mb-3 mt-3">Total number of support requests that come in.</p>
                            </div>
                            <div id="support-chart"></div>
                            <div class="card-footer bg-primary text-white">
                                <div class="row text-center">
                                    <div class="col">
                                        <h4 class="m-0 text-white">10</h4>
                                        <span>Open</span>
                                    </div>
                                    <div class="col">
                                        <h4 class="m-0 text-white">5</h4>
                                        <span>Running</span>
                                    </div>
                                    <div class="col">
                                        <h4 class="m-0 text-white">3</h4>
                                        <span>Solved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card support-bar overflow-hidden">
                            <div class="card-body pb-0">
                                <h2 class="m-0">350</h2>
                                <span class="text-c-green">Support Requests</span>
                                <p class="mb-3 mt-3">Total number of support requests that come in.</p>
                            </div>
                            <div id="support-chart1"></div>
                            <div class="card-footer bg-success text-white">
                                <div class="row text-center">
                                    <div class="col">
                                        <h4 class="m-0 text-white">10</h4>
                                        <span>Open</span>
                                    </div>
                                    <div class="col">
                                        <h4 class="m-0 text-white">5</h4>
                                        <span>Running</span>
                                    </div>
                                    <div class="col">
                                        <h4 class="m-0 text-white">3</h4>
                                        <span>Solved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- support-section end -->
            </div>
            <div class="col-lg-5 col-md-12">
                <!-- page statustic card start -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h4 class="text-c-yellow">$30200</h4>
                                        <h6 class="text-muted m-b-0">All Earnings</h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i class="feather icon-bar-chart-2 f-28"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-c-yellow">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <p class="text-white m-b-0">% change</p>
                                    </div>
                                    <div class="col-3 text-right">
                                        <i class="feather icon-trending-up text-white f-16"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h4 class="text-c-green">290+</h4>
                                        <h6 class="text-muted m-b-0">Page Views</h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i class="feather icon-file-text f-28"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-c-green">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <p class="text-white m-b-0">% change</p>
                                    </div>
                                    <div class="col-3 text-right">
                                        <i class="feather icon-trending-up text-white f-16"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h4 class="text-c-red">145</h4>
                                        <h6 class="text-muted m-b-0">Task</h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i class="feather icon-calendar f-28"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-c-red">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <p class="text-white m-b-0">% change</p>
                                    </div>
                                    <div class="col-3 text-right">
                                        <i class="feather icon-trending-down text-white f-16"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-8">
                                        <h4 class="text-c-blue">500</h4>
                                        <h6 class="text-muted m-b-0">Downloads</h6>
                                    </div>
                                    <div class="col-4 text-right">
                                        <i class="feather icon-thumbs-down f-28"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-c-blue">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <p class="text-white m-b-0">% change</p>
                                    </div>
                                    <div class="col-3 text-right">
                                        <i class="feather icon-trending-down text-white f-16"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- page statustic card end -->
            </div>
            <!-- prject ,team member start -->
            <div class="col-xl-6 col-md-12">
                <div class="card table-card">
                    <div class="card-header">
                        <h5>Projects</h5>
                        <div class="card-header-right">
                            <div class="btn-group card-option">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="feather icon-more-horizontal"></i>
                                </button>
                                <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-item full-card"><a href="#!"><span><i
                                                    class="feather icon-maximize"></i> maximize</span><span
                                                style="display:none"><i class="feather icon-minimize"></i>
                                                Restore</span></a></li>
                                    <li class="dropdown-item minimize-card"><a href="#!"><span><i
                                                    class="feather icon-minus"></i> collapse</span><span
                                                style="display:none"><i class="feather icon-plus"></i> expand</span></a>
                                    </li>
                                    <li class="dropdown-item reload-card"><a href="#!"><i
                                                class="feather icon-refresh-cw"></i> reload</a></li>
                                    <li class="dropdown-item close-card"><a href="#!"><i class="feather icon-trash"></i>
                                            remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="chk-option">
                                                <label
                                                    class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input">
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            Assigned
                                        </th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th class="text-right">Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label
                                                    class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input">
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="/assets/images/user/avatar-4.jpg" alt="user image"
                                                    class="img-radius wid-40 align-top m-r-15">
                                                <div class="d-inline-block">
                                                    <h6>John Deo</h6>
                                                    <p class="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Able Pro</td>
                                        <td>Jun, 26</td>
                                        <td class="text-right"><label class="badge badge-light-danger">Low</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label
                                                    class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input">
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="/assets/images/user/avatar-2.jpg" alt="user image"
                                                    class="img-radius wid-40 align-top m-r-15">
                                                <div class="d-inline-block">
                                                    <h6>Jenifer Vintage</h6>
                                                    <p class="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Mashable</td>
                                        <td>March, 31</td>
                                        <td class="text-right"><label class="badge badge-light-primary">high</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label
                                                    class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input">
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="/assets/images/user/avatar-3.jpg" alt="user image"
                                                    class="img-radius wid-40 align-top m-r-15">
                                                <div class="d-inline-block">
                                                    <h6>William Jem</h6>
                                                    <p class="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Flatable</td>
                                        <td>Aug, 02</td>
                                        <td class="text-right"><label class="badge badge-light-success">medium</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label
                                                    class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input">
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="/assets/images/user/avatar-2.jpg" alt="user image"
                                                    class="img-radius wid-40 align-top m-r-15">
                                                <div class="d-inline-block">
                                                    <h6>David Jones</h6>
                                                    <p class="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Guruable</td>
                                        <td>Sep, 22</td>
                                        <td class="text-right"><label class="badge badge-light-primary">high</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-md-12">
                <div class="card latest-update-card">
                    <div class="card-header">
                        <h5>Latest Updates</h5>
                        <div class="card-header-right">
                            <div class="btn-group card-option">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="feather icon-more-horizontal"></i>
                                </button>
                                <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-item full-card"><a href="#!"><span><i
                                                    class="feather icon-maximize"></i> maximize</span><span
                                                style="display:none"><i class="feather icon-minimize"></i>
                                                Restore</span></a></li>
                                    <li class="dropdown-item minimize-card"><a href="#!"><span><i
                                                    class="feather icon-minus"></i> collapse</span><span
                                                style="display:none"><i class="feather icon-plus"></i> expand</span></a>
                                    </li>
                                    <li class="dropdown-item reload-card"><a href="#!"><i
                                                class="feather icon-refresh-cw"></i> reload</a></li>
                                    <li class="dropdown-item close-card"><a href="#!"><i class="feather icon-trash"></i>
                                            remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="latest-update-box">
                            <div class="row p-t-30 p-b-30">
                                <div class="col-auto text-right update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">2 hrs ago</p>
                                    <i class="feather icon-twitter bg-twitter update-icon"></i>
                                </div>
                                <div class="col">
                                    <a href="#!">
                                        <h6>+ 1652 Followers</h6>
                                    </a>
                                    <p class="text-muted m-b-0">You’re getting more and more followers, keep it up!</p>
                                </div>
                            </div>
                            <div class="row p-b-30">
                                <div class="col-auto text-right update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">4 hrs ago</p>
                                    <i class="feather icon-briefcase bg-c-red update-icon"></i>
                                </div>
                                <div class="col">
                                    <a href="#!">
                                        <h6>+ 5 New Products were added!</h6>
                                    </a>
                                    <p class="text-muted m-b-0">Congratulations!</p>
                                </div>
                            </div>
                            <div class="row p-b-0">
                                <div class="col-auto text-right update-meta">
                                    <p class="text-muted m-b-0 d-inline-flex">2 day ago</p>
                                    <i class="feather icon-facebook bg-facebook update-icon"></i>
                                </div>
                                <div class="col">
                                    <a href="#!">
                                        <h6>+1 Friend Requests</h6>
                                    </a>
                                    <p class="text-muted m-b-10">This is great, keep it up!</p>
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <tr>
                                                <td class="b-none">
                                                    <a href="#!" class="align-middle">
                                                        <img src="/assets/images/user/avatar-2.jpg" alt="user image"
                                                            class="img-radius wid-40 align-top m-r-15">
                                                        <div class="d-inline-block">
                                                            <h6>Jeny William</h6>
                                                            <p class="text-muted m-b-0">Graphic Designer</p>
                                                        </div>
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <a href="#!" class="b-b-primary text-primary">View all Projects</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- prject ,team member start -->
            <!-- seo start -->
            <div class="col-xl-4 col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <h3>$16,756</h3>
                                <h6 class="text-muted m-b-0">Visits<i class="fa fa-caret-down text-c-red m-l-10"></i>
                                </h6>
                            </div>
                            <div class="col-6">
                                <div id="seo-chart1" class="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <h3>49.54%</h3>
                                <h6 class="text-muted m-b-0">Bounce Rate<i
                                        class="fa fa-caret-up text-c-green m-l-10"></i></h6>
                            </div>
                            <div class="col-6">
                                <div id="seo-chart2" class="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <h3>1,62,564</h3>
                                <h6 class="text-muted m-b-0">Products<i class="fa fa-caret-down text-c-red m-l-10"></i>
                                </h6>
                            </div>
                            <div class="col-6">
                                <div id="seo-chart3" class="d-flex align-items-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- seo end -->

            <!-- Latest Customers start -->
            <div class="col-lg-8 col-md-12">
                <div class="card table-card review-card">
                    <div class="card-header borderless ">
                        <h5>Customer Reviews</h5>
                        <div class="card-header-right">
                            <div class="btn-group card-option">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="feather icon-more-horizontal"></i>
                                </button>
                                <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-item full-card"><a href="#!"><span><i
                                                    class="feather icon-maximize"></i> maximize</span><span
                                                style="display:none"><i class="feather icon-minimize"></i>
                                                Restore</span></a></li>
                                    <li class="dropdown-item minimize-card"><a href="#!"><span><i
                                                    class="feather icon-minus"></i> collapse</span><span
                                                style="display:none"><i class="feather icon-plus"></i> expand</span></a>
                                    </li>
                                    <li class="dropdown-item reload-card"><a href="#!"><i
                                                class="feather icon-refresh-cw"></i> reload</a></li>
                                    <li class="dropdown-item close-card"><a href="#!"><i class="feather icon-trash"></i>
                                            remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="review-block">
                            <div class="row">
                                <div class="col-sm-auto p-r-0">
                                    <img src="/assets/images/user/avatar-2.jpg" alt="user image"
                                        class="img-radius profile-img cust-img m-b-15">
                                </div>
                                <div class="col">
                                    <h6 class="m-b-15">John Deo <span class="float-right f-13 text-muted"> a week
                                            ago</span></h6>
                                    <a href="#!"><i class="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i class="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i class="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <p class="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <a href="#!" class="m-r-30 text-muted"><i
                                            class="feather icon-thumbs-up m-r-15"></i>Helpful?</a>
                                    <a href="#!"><i class="feather icon-heart-on text-c-red m-r-15"></i></a>
                                    <a href="#!"><i class="feather icon-edit text-muted"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-auto p-r-0">
                                    <img src="/assets/images/user/avatar-4.jpg" alt="user image"
                                        class="img-radius profile-img cust-img m-b-15">
                                </div>
                                <div class="col">
                                    <h6 class="m-b-15">Allina D’croze <span class="float-right f-13 text-muted"> a week
                                            ago</span></h6>
                                    <a href="#!"><i class="feather icon-star-on f-18 text-c-yellow"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <a href="#!"><i class="feather icon-star f-18 text-muted"></i></a>
                                    <p class="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer
                                        took a
                                        galley of type and scrambled it to make a type specimen book.</p>
                                    <a href="#!" class="m-r-30 text-muted"><i
                                            class="feather icon-thumbs-up m-r-15"></i>Helpful?</a>
                                    <a href="#!"><i class="feather icon-heart-on text-c-red m-r-15"></i></a>
                                    <a href="#!"><i class="feather icon-edit text-muted"></i></a>
                                    <blockquote class="blockquote m-t-15 m-b-0">
                                        <h6>Allina D’croze</h6>
                                        <p class="m-b-0 text-muted">Lorem Ipsum is simply dummy text of the industry.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div class="text-right  m-r-20">
                            <a href="#!" class="b-b-primary text-primary">View all Customer Reviews</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-3">Power</h5>
                                <h2>2789<span class="text-muted m-l-5 f-14">kw</span></h2>
                                <div id="power-card-chart1"></div>
                                <div class="row">
                                    <div class="col col-auto">
                                        <div class="map-area">
                                            <h6 class="m-0">2876 <span> kw</span></h6>
                                            <p class="text-muted m-0">month</p>
                                        </div>
                                    </div>
                                    <div class="col col-auto">
                                        <div class="map-area">
                                            <h6 class="m-0">234 <span> kw</span></h6>
                                            <p class="text-muted m-0">Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-3">Temperature</h5>
                                <h2>7.3<span class="text-muted m-l-10 f-14">deg</span></h2>
                                <div id="power-card-chart3"></div>
                                <div class="row">
                                    <div class="col col-auto">
                                        <div class="map-area">
                                            <h6 class="m-0">4.5 <span> deg</span></h6>
                                            <p class="text-muted m-0">month</p>
                                        </div>
                                    </div>
                                    <div class="col col-auto">
                                        <div class="map-area">
                                            <h6 class="m-0">0.5 <span> deg</span></h6>

                                            <p class="text-muted m-0">Today</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="card chat-card">
                    <div class="card-header">
                        <h5>Chat</h5>
                        <div class="card-header-right">
                            <div class="btn-group card-option">
                                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="feather icon-more-horizontal"></i>
                                </button>
                                <ul class="list-unstyled card-option dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-item full-card"><a href="#!"><span><i
                                                    class="feather icon-maximize"></i> maximize</span><span
                                                style="display:none"><i class="feather icon-minimize"></i>
                                                Restore</span></a></li>
                                    <li class="dropdown-item minimize-card"><a href="#!"><span><i
                                                    class="feather icon-minus"></i> collapse</span><span
                                                style="display:none"><i class="feather icon-plus"></i> expand</span></a>
                                    </li>
                                    <li class="dropdown-item reload-card"><a href="#!"><i
                                                class="feather icon-refresh-cw"></i> reload</a></li>
                                    <li class="dropdown-item close-card"><a href="#!"><i class="feather icon-trash"></i>
                                            remove</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row m-b-20 received-chat">
                            <div class="col-auto p-r-0">
                                <img src="/assets/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40">
                            </div>
                            <div class="col">
                                <div class="msg">
                                    <p class="m-b-0">Nice to meet you!</p>
                                </div>
                                <p class="text-muted m-b-0"><i class="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                        </div>
                        <div class="row m-b-20 send-chat">
                            <div class="col">
                                <div class="msg">
                                    <p class="m-b-0">Nice to meet you!</p>
                                </div>
                                <p class="text-muted m-b-0"><i class="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                            <div class="col-auto p-l-0">
                                <img src="/assets/images/user/avatar-3.jpg" alt="user image" class="img-radius wid-40">
                            </div>
                        </div>
                        <div class="row m-b-20 received-chat">
                            <div class="col-auto p-r-0">
                                <img src="/assets/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40">
                            </div>
                            <div class="col">
                                <div class="msg">
                                    <p class="m-b-0">Nice to meet you!</p>
                                    <img src="/assets/images/widget/dashborad-1.jpg" alt="">
                                    <img src="/assets/images/widget/dashborad-3.jpg" alt="">
                                </div>
                                <p class="text-muted m-b-0"><i class="fa fa-clock-o m-r-10"></i>10:20am</p>
                            </div>
                        </div>
                        <div class="form-group m-t-15">
                            <label class="floating-label" for="Project">Send message</label>
                            <input type="text" name="task-insert" class="form-control" id="Project">
                            <div class="form-icon">
                                <button class="btn btn-primary btn-icon">
                                    <i class="feather icon-message-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card user-card2">
                    <div class="card-body text-center">
                        <h6 class="m-b-15">Project Risk</h6>
                        <div class="risk-rate">
                            <span><b>5</b></span>
                        </div>
                        <h6 class="m-b-10 m-t-10">Balanced</h6>
                        <a href="#!" class="text-c-green b-b-success">Change Your Risk</a>
                        <div class="row justify-content-center m-t-10 b-t-default m-l-0 m-r-0">
                            <div class="col m-t-15 b-r-default">
                                <h6 class="text-muted">Nr</h6>
                                <h6>AWS 2455</h6>
                            </div>
                            <div class="col m-t-15">
                                <h6 class="text-muted">Created</h6>
                                <h6>30th Sep</h6>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success btn-block">Download Overall Report</button>
                </div>
            </div>
            <!-- Latest Customers end -->
        </div>`;
    }
}

module.exports = Html