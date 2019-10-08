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
      title: "Análise",
      htmlBefore: '<i class="far fa-list-alt"></i>',
      to: "/analise-candidatos",
    },
    {
      title: "Entrevista",
      htmlBefore: '<i class="far fa-list-alt"></i>',
      to: "/entrevista-candidatos"
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
