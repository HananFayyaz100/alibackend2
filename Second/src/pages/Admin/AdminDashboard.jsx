// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

//   return (
//     <div className="admin-dashboard">

//       {/* SIDEBAR */}
//       <aside className="admin-sidebar">

//         <div className="sidebar-brand">
//           <div className="sidebar-logo">A</div>

//           <div>
//             <h2>Admin Panel</h2>
//             <span>Portfolio Manager</span>
//           </div>
//         </div>

//         <nav className="sidebar-nav">

//           <button
//             className="sidebar-link active"
//             onClick={() => navigate("/admin/dashboard")}
//           >
//             <span className="sidebar-icon">⌂</span>
//             Dashboard
//           </button>

//           <button
//             className="sidebar-link"
//             onClick={() => navigate("/admin/projects")}
//           >
//             <span className="sidebar-icon">▦</span>
//             Projects
//           </button>

//           <button
//             className="sidebar-link"
//             onClick={() => navigate("/admin/add-project")}
//           >
//             <span className="sidebar-icon">＋</span>
//             Add Project
//           </button>

//         </nav>

//         <div className="sidebar-bottom">

//           <div className="sidebar-user">
//             <div className="user-avatar">
//               A
//             </div>

//             <div className="user-info">
//               <strong>Administrator</strong>
//               <span>Admin Account</span>
//             </div>
//           </div>

//           <button
//             className="logout-button"
//             onClick={handleLogout}
//           >
//             <span>↪</span>
//             Logout
//           </button>

//         </div>

//       </aside>


//       {/* MAIN CONTENT */}
//       <main className="dashboard-main">

//         {/* TOP BAR */}
//         <header className="dashboard-header">

//           <div>
//             <p className="dashboard-overline">
//               ADMINISTRATION
//             </p>

//             <h1>Dashboard</h1>

//             <p className="dashboard-welcome">
//               Welcome back. Manage your portfolio from here.
//             </p>
//           </div>

//           <button
//             className="header-add-button"
//             onClick={() => navigate("/admin/add-project")}
//           >
//             <span>＋</span>
//             New Project
//           </button>

//         </header>


//         {/* STAT CARDS */}
//         <section className="dashboard-stats">

//           <div className="stat-card">

//             <div className="stat-card-top">
//               <span className="stat-label">
//                 TOTAL PROJECTS
//               </span>

//               <div className="stat-icon">
//                 ▦
//               </div>
//             </div>

//             <h2>Portfolio</h2>

//             <p>
//               Manage all your uploaded projects.
//             </p>

//           </div>


//           <div className="stat-card">

//             <div className="stat-card-top">
//               <span className="stat-label">
//                 CREATE
//               </span>

//               <div className="stat-icon">
//                 ＋
//               </div>
//             </div>

//             <h2>New Project</h2>

//             <p>
//               Upload a new project to your portfolio.
//             </p>

//           </div>


//           <div className="stat-card">

//             <div className="stat-card-top">
//               <span className="stat-label">
//                 MANAGEMENT
//               </span>

//               <div className="stat-icon">
//                 ⚙
//               </div>
//             </div>

//             <h2>Edit Projects</h2>

//             <p>
//               Update or remove existing projects.
//             </p>

//           </div>

//         </section>


//         {/* QUICK ACTIONS */}
//         <section className="dashboard-section">

//           <div className="section-heading">

//             <div>
//               <p className="section-overline">
//                 QUICK ACTIONS
//               </p>

//               <h2>Manage your portfolio</h2>
//             </div>

//           </div>


//           <div className="action-grid">

//             {/* ADD PROJECT */}
//             <div className="action-card">

//               <div className="action-icon add-icon">
//                 ＋
//               </div>

//               <div className="action-content">

//                 <h3>Create New Project</h3>

//                 <p>
//                   Add a new project with title,
//                   category, description and images.
//                 </p>

//                 <button
//                   onClick={() =>
//                     navigate("/admin/add-project")
//                   }
//                   className="action-button"
//                 >
//                   Add Project
//                   <span>→</span>
//                 </button>

//               </div>

//             </div>


//             {/* MANAGE PROJECTS */}
//             <div className="action-card">

//               <div className="action-icon manage-icon">
//                 ▦
//               </div>

//               <div className="action-content">

//                 <h3>Manage Projects</h3>

//                 <p>
//                   View your projects and edit or
//                   delete them whenever you need.
//                 </p>

//                 <button
//                   onClick={() =>
//                     navigate("/admin/projects")
//                   }
//                   className="action-button"
//                 >
//                   View Projects
//                   <span>→</span>
//                 </button>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* INFO SECTION */}
//         <section className="dashboard-info">

//           <div className="info-icon">
//             ✓
//           </div>

//           <div>
//             <h3>Your portfolio is under your control.</h3>

//             <p>
//               Create new projects, upload images and
//               keep your portfolio updated from the
//               admin panel.
//             </p>
//           </div>

//         </section>

//       </main>

//     </div>
//   );
// };

// export default AdminDashboard;
















// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard2.css";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

//   return (
//     <div className="vision-dashboard">

//       {/* =====================================================
//           SIDEBAR
//       ===================================================== */}

//       <aside className="vision-sidebar">

//         {/* BRAND */}
//         <div className="vision-brand">
//           <div className="vision-brand-mark">A</div>

//           <div className="vision-brand-text">
//             <h2>Ali Fayyaz</h2>
//             <span>Portfolio Manager</span>
//           </div>
//         </div>


//         {/* NAVIGATION */}
//         <nav className="vision-nav">

//           <button
//             className="vision-nav-item active"
//             onClick={() => navigate("/admin/dashboard")}
//           >
//             <span className="vision-nav-icon">⌂</span>
//             <span>Dashboard</span>
//             <span className="nav-arrow">⌃</span>
//           </button>


//           <button
//             className="vision-nav-item"
//             onClick={() => {}}
//           >
//             <span className="vision-nav-icon">●</span>
//             <span>Profile</span>
//           </button>


//           <button
//             className="vision-nav-item"
//             onClick={() => navigate("/admin/projects")}
//           >
//             <span className="vision-nav-icon">▦</span>
//             <span>Projects</span>
//             <span className="nav-arrow">⌄</span>
//           </button>


//           {/* CERTIFICATE = EXISTING PROJECT MANAGEMENT */}
//           <button
//             className="vision-nav-item"
//             onClick={() => navigate("/admin/projects")}
//           >
//             <span className="vision-nav-icon">▤</span>
//             <span>Certificate</span>
//             <span className="nav-arrow">⌄</span>
//           </button>

//         </nav>


//         {/* SIDEBAR BOTTOM */}
//         <div className="vision-sidebar-bottom">

//           <button
//             className="vision-bottom-link"
//             onClick={() => navigate("/admin/login")}
//           >
//             <span className="vision-nav-icon">↪</span>
//             <span>Sign In</span>
//           </button>


//           <button className="vision-bottom-link">
//             <span className="vision-nav-icon">＋</span>
//             <span>Sign Up</span>
//           </button>


//           <div className="vision-help-card">

//             <div className="help-wave"></div>

//             <div className="help-content">
//               <strong>Need help?</strong>
//               <span>Contact your administrator.</span>
//             </div>

//           </div>


//           <button
//             className="vision-logout"
//             onClick={handleLogout}
//           >
//             <span>↪</span>
//             Logout
//           </button>

//         </div>

//       </aside>


//       {/* =====================================================
//           MAIN AREA
//       ===================================================== */}

//       <main className="vision-main">


//         {/* ===================================================
//             TOP HEADER
//         =================================================== */}

//         <header className="vision-topbar">

//           <div className="topbar-title">
//             <span>Profile</span>
//           </div>


//           <div className="topbar-right">

//             <div className="search-box">

//               <span>⌕</span>

//               <input
//                 type="text"
//                 placeholder="Type here..."
//               />

//             </div>


//             <button className="topbar-action">
//               <span>↪</span>
//               Sign In
//             </button>


//             <button className="topbar-icon">
//               ♧
//             </button>


//             <button className="topbar-icon">
//               ♢
//             </button>

//           </div>

//         </header>


//         {/* ===================================================
//             DASHBOARD CONTENT
//         =================================================== */}

//         <div className="vision-content">


//           {/* =================================================
//               WELCOME / TOP CARDS
//           ================================================= */}

//           <section className="vision-top-grid">


//             {/* WELCOME CARD */}

//             <div className="vision-welcome-card">

//               <div className="welcome-content">

//                 <span className="welcome-small">
//                   WELCOME BACK!
//                 </span>

//                 <h1>
//                   Welcome back!
//                 </h1>

//                 <p>
//                   Manage your portfolio
//                   with ease.
//                 </p>

//                 <button
//                   onClick={() =>
//                     navigate("/admin/projects")
//                   }
//                   className="mini-card-button"
//                 >
//                   View your website →
//                 </button>

//               </div>


//               <div className="welcome-visual">

//                 <div className="visual-screen screen-one"></div>
//                 <div className="visual-screen screen-two"></div>
//                 <div className="visual-screen screen-three"></div>

//               </div>

//             </div>


//             {/* ADD PROJECT */}

//             <div
//               className="vision-action-card"
//               onClick={() =>
//                 navigate("/admin/add-project")
//               }
//             >

//               <div className="action-card-heading">
//                 <h3>Add New Project</h3>
//               </div>

//               <div className="big-plus">
//                 +
//               </div>

//               <p>
//                 Click here and upload
//                 <br />
//                 your project in Website
//               </p>

//             </div>


//             {/* CERTIFICATE */}

//             <div
//               className="vision-action-card"
//               onClick={() =>
//                 navigate("/admin/projects")
//               }
//             >

//               <div className="action-card-heading">
//                 <h3>Add New Certificate</h3>
//               </div>

//               <div className="big-plus">
//                 +
//               </div>

//               <p>
//                 Click here and manage
//                 <br />
//                 your portfolio projects
//               </p>

//             </div>


//             {/* PROFILE INFORMATION */}

//             <div className="profile-info-card">

//               <div className="profile-info-header">
//                 <h3>Profile Information</h3>

//                 <span className="profile-edit">
//                   ✎
//                 </span>
//               </div>


//               <div className="profile-line">
//                 <span>Full Name</span>
//                 <strong>Ali Fayyaz</strong>
//               </div>


//               <div className="profile-line">
//                 <span>Portfolio</span>
//                 <strong>Web Developer</strong>
//               </div>


//               <div className="profile-line">
//                 <span>Projects</span>
//                 <strong>Active</strong>
//               </div>


//               <div className="profile-line">
//                 <span>Account</span>
//                 <strong>Administrator</strong>
//               </div>

//             </div>

//           </section>


//           {/* =================================================
//               PROJECT SECTION
//           ================================================= */}

//           <section className="vision-project-section">


//             <div className="vision-section-title">

//               <div>
//                 <span>Overview</span>

//                 <h2>
//                   All Projects
//                 </h2>
//               </div>


//               <button
//                 onClick={() =>
//                   navigate("/admin/projects")
//                 }
//                 className="see-all-button"
//               >
//                 View All
//               </button>

//             </div>


//             <div className="project-layout">


//               {/* PROJECTS */}

//               <div className="project-list">


//                 {/* PROJECT CARD 1 */}

//                 <div className="vision-project-card">

//                   <div className="project-image project-image-one">
//                     <span>Project #1</span>
//                   </div>

//                   <div className="project-card-body">

//                     <span className="project-number">
//                       Project # 6
//                     </span>

//                     <h3>
//                       Company Portfolio Website
//                     </h3>

//                     <p>
//                       A modern responsive portfolio
//                       website with a clean UI.
//                     </p>

//                     <button
//                       onClick={() =>
//                         navigate("/admin/projects")
//                       }
//                       className="project-view-button"
//                     >
//                       VIEW ALL
//                     </button>

//                   </div>

//                 </div>


//                 {/* PROJECT CARD 2 */}

//                 <div className="vision-project-card">

//                   <div className="project-image project-image-two">
//                     <span>Project #2</span>
//                   </div>

//                   <div className="project-card-body">

//                     <span className="project-number">
//                       Project # 5
//                     </span>

//                     <h3>
//                       Creative Portfolio Website
//                     </h3>

//                     <p>
//                       Creative design focused website
//                       with modern visual elements.
//                     </p>

//                     <button
//                       onClick={() =>
//                         navigate("/admin/projects")
//                       }
//                       className="project-view-button"
//                     >
//                       VIEW ALL
//                     </button>

//                   </div>

//                 </div>


//                 {/* PROJECT CARD 3 */}

//                 <div className="vision-project-card">

//                   <div className="project-image project-image-three">
//                     <span>Project #3</span>
//                   </div>

//                   <div className="project-card-body">

//                     <span className="project-number">
//                       Project # 4
//                     </span>

//                     <h3>
//                       Business Website
//                     </h3>

//                     <p>
//                       Professional business website
//                       with responsive design.
//                     </p>

//                     <button
//                       onClick={() =>
//                         navigate("/admin/projects")
//                       }
//                       className="project-view-button"
//                     >
//                       VIEW ALL
//                     </button>

//                   </div>

//                 </div>

//               </div>


//               {/* RANKING */}

//               <div className="ranking-card">

//                 <div className="ranking-header">
//                   <span>Featured Ranking</span>
//                 </div>


//                 <div className="ranking-circle">

//                   <span>Portfolio</span>

//                   <strong>
//                     9.3
//                   </strong>

//                   <small>
//                     Quality
//                   </small>

//                 </div>


//                 <div className="ranking-bottom">

//                   <span>Website visits</span>

//                   <strong>
//                     145 people
//                   </strong>

//                 </div>

//               </div>

//             </div>

//           </section>


//           {/* =================================================
//               FOOTER
//           ================================================= */}

//           <footer className="vision-footer">

//             <span>
//               © {new Date().getFullYear()} Ali Fayyaz
//             </span>

//             <div>
//               <span>Help Center</span>
//               <span>Privacy</span>
//               <span>Logout</span>
//             </div>

//           </footer>

//         </div>

//       </main>

//     </div>
//   );
// };

// export default AdminDashboard;







import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProjects } from "../../api/projectApi";

import "./AdminDashboard2.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectError, setProjectError] = useState("");

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // =====================================================
  // FETCH PROJECTS
  // =====================================================

  useEffect(() => {
    const fetchDashboardProjects = async () => {
      try {
        setLoadingProjects(true);
        setProjectError("");

        const data = await getProjects();

        setProjects(data?.projects || []);
      } catch (error) {
        console.error("Dashboard projects error:", error);

        setProjectError(
          error.response?.data?.message ||
            "Unable to load portfolio information."
        );
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchDashboardProjects();
  }, []);

  // =====================================================
  // DASHBOARD STATISTICS
  // =====================================================

  const statistics = useMemo(() => {
    const totalProjects = projects.length;

    const totalImages = projects.reduce((total, project) => {
      const additional =
        Array.isArray(project.additionalImages)
          ? project.additionalImages.length
          : 0;

      return total + 1 + additional;
    }, 0);

    const uniqueCategories = [
      ...new Set(
        projects
          .map((project) => project.category)
          .filter(Boolean)
      ),
    ];

    const categoryCounts = uniqueCategories
      .map((category) => {
        const count = projects.filter(
          (project) =>
            project.category === category
        ).length;

        return {
          category,
          count,
        };
      })
      .sort((a, b) => b.count - a.count);

    const latestProject =
      projects.length > 0
        ? projects[0]
        : null;

    return {
      totalProjects,
      totalImages,
      totalCategories: uniqueCategories.length,
      categoryCounts,
      latestProject,
    };
  }, [projects]);

  // =====================================================
  // RECENT PROJECTS
  // =====================================================

  const recentProjects = useMemo(() => {
    return projects.slice(0, 4);
  }, [projects]);

  // =====================================================
  // CATEGORY MAX
  // =====================================================

  const maxCategoryCount =
    statistics.categoryCounts.length > 0
      ? Math.max(
          ...statistics.categoryCounts.map(
            (item) => item.count
          )
        )
      : 1;

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) return "Recently";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Recently";
    }

    return parsedDate.toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div className="vision-dashboard">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="vision-sidebar">

        {/* BRAND */}

        <div className="vision-brand">

          <div className="vision-brand-mark">
            A
          </div>

          <div className="vision-brand-text">
            <h2>Ali Fayyaz</h2>
            <span>Portfolio Manager</span>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="vision-nav">

          <button
            className="vision-nav-item active"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            <span className="vision-nav-icon">
              ⌂
            </span>

            <span>Dashboard</span>

            <span className="nav-arrow">
              ⌃
            </span>
          </button>


          <button
            className="vision-nav-item"
            onClick={() => {}}
          >
            <span className="vision-nav-icon">
              ●
            </span>

            <span>Profile</span>
          </button>


          <button
            className="vision-nav-item"
            onClick={() =>
              navigate("/admin/projects")
            }
          >
            <span className="vision-nav-icon">
              ▦
            </span>

            <span>Projects</span>

            <span className="nav-arrow">
              ⌄
            </span>
          </button>


          {/* CERTIFICATE
              Existing Project Management */}

          <button
            className="vision-nav-item"
            onClick={() =>
              navigate("/admin/projects")
            }
          >
            <span className="vision-nav-icon">
              ▤
            </span>

            <span>Certificate</span>

            <span className="nav-arrow">
              ⌄
            </span>
          </button>

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="vision-sidebar-bottom">

          <button
            className="vision-bottom-link"
            onClick={() =>
              navigate("/admin/login")
            }
          >
            <span className="vision-nav-icon">
              ↪
            </span>

            <span>Sign In</span>
          </button>


          <button className="vision-bottom-link">
            <span className="vision-nav-icon">
              ＋
            </span>

            <span>Sign Up</span>
          </button>


          <div className="vision-help-card">

            <div className="help-wave"></div>

            <div className="help-content">
              <strong>Need help?</strong>

              <span>
                Contact your administrator.
              </span>
            </div>

          </div>


          <button
            className="vision-logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="vision-main">


        {/* ===================================================
            TOP BAR
        =================================================== */}

        <header className="vision-topbar">

          <div className="topbar-title">
            <span>Dashboard</span>
          </div>


          <div className="topbar-right">

            <div className="search-box">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Type here..."
              />

            </div>


            <button
              className="topbar-action"
              onClick={() =>
                navigate("/admin/add-project")
              }
            >
              <span>＋</span>
              New Project
            </button>


            <button className="topbar-icon">
              ♧
            </button>

            <button className="topbar-icon">
              ♢
            </button>

          </div>

        </header>


        {/* ===================================================
            CONTENT
        =================================================== */}

        <div className="vision-content">


          {/* =================================================
              WELCOME HEADER
          ================================================= */}

          <section className="dashboard-welcome-row">

            <div>

              <span className="dashboard-eyebrow">
                ADMINISTRATION
              </span>

              <h1>
                Good to see you,{" "}
                <span>Ali Fayyaz</span>
              </h1>

              <p>
                Here's what's happening with
                your portfolio today.
              </p>

            </div>


            <div className="dashboard-date">

              <span>PORTFOLIO STATUS</span>

              <strong>
                {loadingProjects
                  ? "Loading..."
                  : "● Active"}
              </strong>

            </div>

          </section>


          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="dashboard-stat-grid">


            {/* TOTAL PROJECTS */}

            <div className="dashboard-stat-card">

              <div className="stat-top">

                <span>
                  TOTAL PROJECTS
                </span>

                <div className="stat-symbol">
                  ▦
                </div>

              </div>

              <div className="stat-value">

                {loadingProjects
                  ? "—"
                  : statistics.totalProjects}

              </div>

              <p>
                Projects currently in your
                portfolio.
              </p>

            </div>


            {/* TOTAL IMAGES */}

            <div className="dashboard-stat-card">

              <div className="stat-top">

                <span>
                  TOTAL IMAGES
                </span>

                <div className="stat-symbol">
                  ◈
                </div>

              </div>

              <div className="stat-value">

                {loadingProjects
                  ? "—"
                  : statistics.totalImages}

              </div>

              <p>
                Main and additional project
                images.
              </p>

            </div>


            {/* CATEGORIES */}

            <div className="dashboard-stat-card">

              <div className="stat-top">

                <span>
                  CATEGORIES
                </span>

                <div className="stat-symbol">
                  ◇
                </div>

              </div>

              <div className="stat-value">

                {loadingProjects
                  ? "—"
                  : statistics.totalCategories}

              </div>

              <p>
                Different project categories
                available.
              </p>

            </div>


            {/* LATEST PROJECT */}

            <div className="dashboard-stat-card latest-stat">

              <div className="stat-top">

                <span>
                  LATEST PROJECT
                </span>

                <div className="stat-symbol">
                  ✦
                </div>

              </div>

              <div className="latest-project-name">

                {loadingProjects
                  ? "Loading..."
                  : statistics.latestProject
                  ? statistics.latestProject.title
                  : "No projects yet"}

              </div>

              <p>
                {statistics.latestProject
                  ? formatDate(
                      statistics.latestProject.createdAt
                    )
                  : "Create your first project."}
              </p>

            </div>

          </section>


          {/* =================================================
              MAIN INFORMATION GRID
          ================================================= */}

          <section className="dashboard-info-grid">


            {/* =================================================
                RECENT PROJECTS
            ================================================= */}

            <div className="recent-projects-card">

              <div className="dashboard-section-heading">

                <div>

                  <span>
                    PORTFOLIO
                  </span>

                  <h2>
                    Recent Projects
                  </h2>

                </div>


                <button
                  onClick={() =>
                    navigate("/admin/projects")
                  }
                  className="see-all-button"
                >
                  View All →
                </button>

              </div>


              {loadingProjects ? (

                <div className="dashboard-loading">
                  <div className="dashboard-spinner"></div>
                  <span>Loading projects...</span>
                </div>

              ) : projectError ? (

                <div className="dashboard-error">
                  <span>!</span>
                  <p>{projectError}</p>
                </div>

              ) : recentProjects.length === 0 ? (

                <div className="dashboard-no-projects">

                  <div className="empty-project-icon">
                    ＋
                  </div>

                  <h3>
                    No projects yet
                  </h3>

                  <p>
                    Add your first project to
                    start building your portfolio.
                  </p>

                  <button
                    onClick={() =>
                      navigate("/admin/add-project")
                    }
                  >
                    Create Project
                  </button>

                </div>

              ) : (

                <div className="recent-project-list">

                  {recentProjects.map(
                    (project, index) => (

                      <div
                        className="recent-project-item"
                        key={
                          project._id ||
                          project.id ||
                          index
                        }
                      >

                        <div className="recent-project-image">

                          {project.mainImage ? (
                            <img
                              src={project.mainImage}
                              alt={project.title}
                            />
                          ) : (
                            <span>IMG</span>
                          )}

                        </div>


                        <div className="recent-project-info">

                          <span>
                            {project.category ||
                              "Uncategorized"}
                          </span>

                          <h3>
                            {project.title}
                          </h3>

                          <p>
                            {formatDate(
                              project.createdAt
                            )}
                          </p>

                        </div>


                        <button
                          className="recent-project-edit"
                          onClick={() =>
                            navigate(
                              "/admin/projects"
                            )
                          }
                        >
                          EDIT
                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>


            {/* =================================================
                CATEGORY OVERVIEW
            ================================================= */}

            <div className="category-overview-card">

              <div className="dashboard-section-heading">

                <div>

                  <span>
                    BREAKDOWN
                  </span>

                  <h2>
                    Categories
                  </h2>

                </div>

              </div>


              {loadingProjects ? (

                <div className="category-loading">
                  Loading...
                </div>

              ) : statistics.categoryCounts.length === 0 ? (

                <div className="category-empty">
                  No category data available.
                </div>

              ) : (

                <div className="category-list">

                  {statistics.categoryCounts
                    .slice(0, 5)
                    .map((item) => {

                      const percentage =
                        Math.max(
                          8,
                          Math.round(
                            (item.count /
                              maxCategoryCount) *
                              100
                          )
                        );

                      return (
                        <div
                          className="category-row"
                          key={item.category}
                        >

                          <div className="category-row-top">

                            <span>
                              {item.category}
                            </span>

                            <strong>
                              {item.count}
                            </strong>

                          </div>


                          <div className="category-bar">

                            <div
                              style={{
                                width:
                                  `${percentage}%`,
                              }}
                            ></div>

                          </div>

                        </div>
                      );
                    })}

                </div>

              )}


              <div className="category-total">

                <span>
                  Total categories
                </span>

                <strong>
                  {loadingProjects
                    ? "—"
                    : statistics.totalCategories}
                </strong>

              </div>

            </div>

          </section>


          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <section className="quick-actions-section">

            <div className="dashboard-section-heading">

              <div>

                <span>
                  QUICK ACTIONS
                </span>

                <h2>
                  Manage your portfolio
                </h2>

              </div>

            </div>


            <div className="quick-action-grid">


              {/* ADD */}

              <button
                className="quick-action-card"
                onClick={() =>
                  navigate("/admin/add-project")
                }
              >

                <div className="quick-action-icon">
                  ＋
                </div>

                <div>
                  <h3>
                    Add New Project
                  </h3>

                  <p>
                    Upload a new project,
                    images and details.
                  </p>
                </div>

                <span className="quick-arrow">
                  →
                </span>

              </button>


              {/* MANAGE */}

              <button
                className="quick-action-card"
                onClick={() =>
                  navigate("/admin/projects")
                }
              >

                <div className="quick-action-icon">
                  ▦
                </div>

                <div>
                  <h3>
                    Manage Projects
                  </h3>

                  <p>
                    Edit, update or delete
                    existing projects.
                  </p>
                </div>

                <span className="quick-arrow">
                  →
                </span>

              </button>


              {/* WEBSITE */}

              <button
                className="quick-action-card"
                onClick={() =>
                  navigate("/")
                }
              >

                <div className="quick-action-icon">
                  ↗
                </div>

                <div>
                  <h3>
                    View Website
                  </h3>

                  <p>
                    Open the public portfolio
                    website.
                  </p>
                </div>

                <span className="quick-arrow">
                  →
                </span>

              </button>

            </div>

          </section>


          {/* =================================================
              PORTFOLIO INSIGHT
          ================================================= */}

          <section className="portfolio-insight">

            <div className="insight-icon">
              ✦
            </div>

            <div className="insight-content">

              <span>
                PORTFOLIO INSIGHT
              </span>

              <h2>
                Your portfolio at a glance
              </h2>

              <p>
                You currently have{" "}
                <strong>
                  {loadingProjects
                    ? "..."
                    : statistics.totalProjects}
                </strong>{" "}
                project
                {statistics.totalProjects === 1
                  ? ""
                  : "s"} and{" "}
                <strong>
                  {loadingProjects
                    ? "..."
                    : statistics.totalImages}
                </strong>{" "}
                image
                {statistics.totalImages === 1
                  ? ""
                  : "s"} across{" "}
                <strong>
                  {loadingProjects
                    ? "..."
                    : statistics.totalCategories}
                </strong>{" "}
                categor
                {statistics.totalCategories === 1
                  ? "y"
                  : "ies"}.
              </p>

            </div>


            <button
              onClick={() =>
                navigate("/admin/projects")
              }
              className="insight-button"
            >
              Manage Portfolio →
            </button>

          </section>


          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="vision-footer">

            <span>
              © {new Date().getFullYear()} Ali Fayyaz
            </span>

            <div>

              <span>
                Help Center
              </span>

              <span>
                Privacy
              </span>

              <span
                onClick={handleLogout}
              >
                Logout
              </span>

            </div>

          </footer>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;