const completionSpec: Fig.Spec = {
  name: "_shortcuts",
  description: "Telegraph Project shortcuts",
  additionalSuggestions: [
    {
      icon: "fig://icon?type=npm",
      name: "Build all",
      insertValue: "\b\bpnpm -r --if-present --stream run build",
      description: "Build all packages",
    },
    {
      icon: "fig://icon?type=npm",
      name: "Build package",
      insertValue: "\b\bpnpm --filter @tlgr/{cursor} run build",
      description: "Build selected package",
    },
    {
      icon: "fig://icon?type=github",
      name: "Preview Docs local",
      insertValue: "\b\bpnpm --filter @tlgr/docs run start",
      description: "View the docs for this repo",
    },
    {
      icon: "fig://icon?type=github",
      name: "Preview Docs remotely",
      insertValue: "\b\bopen https://vitalics.github.io/Telegraph/docs/intro/",
      description: "View the remote docs for this repo",
    },
  ],
};

export default completionSpec;
