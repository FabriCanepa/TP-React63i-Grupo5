import Ejercicio7 from "./Ejercicios/Ejercicio7";

let empleados = [
  {
    id: 1,
    fullName: "Michael Scott",
    title: "CEO",
    department: "Business",
    pic: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/03/office-michael-scott-2979140.jpg?tf=3840x",
  },
  {
    id: 2,
    fullName: "Dwight Schrute",
    title: "CMO",
    department: "Marketing",
    pic: "https://pbs.twimg.com/profile_images/1212841876895813632/4mzarqqS_400x400.jpg",
  },
  {
    id: 3,
    fullName: "Jim Halper",
    title: "CFO",
    department: "Business",
    pic: "https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918_400x400.jpeg",
  },
  {
    id: 4,
    fullName: "Pam Beesly",
    title: "CTO",
    department: "Engineering",
    pic: "https://i.pinimg.com/474x/4c/51/96/4c51969054c87cbe670b85a830c3b136.jpg",
  },
  {
    id: 5,
    fullName: "Kevin Malone",
    title: "Art Director",
    department: "Marketing",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroAZDhjuj7e6fouEUA6c4gasw_cX4WftMrA&usqp=CAU",
  },
  {
    id: 6,
    fullName: "Toby Flenderson",
    title: "Frontend Dev",
    department: "Engineering",
    pic: "https://media.licdn.com/dms/image/C4D03AQHxbBq65rlb3A/profile-displayphoto-shrink_800_800/0/1550971547210?e=2147483647&v=beta&t=GHxSG_EYAERHdeaE_RN-uEQ-EwWmBa4Gp6o4vOXWdvo",
  },
  {
    id: 7,
    fullName: "Andy Bernard",
    title: "Digital Strategist",
    department: "Marketing",
    pic: "https://akns-images.eonline.com/eol_images/Entire_Site/2020023/rs_600x600-200123145928-office1.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
  },
  {
    id: 8,
    fullName: "Ryan Howard",
    title: "Backend Dev",
    department: "Engineering",
    pic: "https://preview.redd.it/tykfeu96xbv01.jpg?auto=webp&s=682c732a8138cf35c9bdcdb831dd46da04825115",
  },
  {
    id: 9,
    fullName: "Darryl Philbin",
    title: "DevOps Engineer",
    department: "Engineering",
    pic: "https://www.looper.com/img/gallery/what-craig-robinson-has-been-doing-since-playing-darryl-on-the-office/intro-1574368248.jpg",
  },
];

function Employees() {
  return (
    <section className="container p-3">
      {empleados.map((item) => {
        return (
          <Ejercicio7
            key={item.id}
            name={item.fullName}
            avatar={item.pic}
            title={item.title}
            dept={item.department}
          />
        );
      })}
    </section>
  );
}
export default Employees;
