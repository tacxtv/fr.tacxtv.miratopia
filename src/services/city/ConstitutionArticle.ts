export type ConstitutionArticle = {
  artnum: string;
  title: string;
  content: string;
  abrogatedArtnums: string[];
  metadata: {
    onProposalBy: string;
    onProposalAt: string;
  },
  appliedAt: string;
}