export default function() {
  return [
    {
      title: "Home",
      to: "/home",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Candidatos",
      htmlBefore: '<i class="far fa-list-alt"></i>',
      to: "/candidatos",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
