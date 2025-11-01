import { colors } from "../theme";

export enum BudgetStatus {
  DRAFT = "draft",
  SENT = "sent",
  APPROVED = "approved",
  DECLINED = "declined",
}

export const StatusContainerColor = {
  "draft": colors.gray[300],
  "sent": colors.info.light,
  "approved": colors.success.light,
  "declined": colors.danger.light
} as const;

export type StatusContainerColor = typeof StatusContainerColor[keyof typeof StatusContainerColor];


export const StatusDotColor = {
  "draft": colors.gray[400],
  "sent": colors.info.base,
  "approved": colors.success.base,
  "declined": colors.danger.base
} as const;

export type StatusDotColor = typeof StatusDotColor[keyof typeof StatusDotColor];

export const StatusLabelColor = {
  "draft": colors.gray[500],
  "sent": colors.info.dark,
  "approved": colors.success.dark,
  "declined": colors.danger.dark
} as const;

export type StatusLabelColor = typeof StatusLabelColor[keyof typeof StatusLabelColor];

export const StatusName = {
  "draft": "Rascunho",
  "sent": "Enviado",
  "approved": "Aprovado",
  "declined": "Recusado"
} as const;

export type StatusName = typeof StatusName[keyof typeof StatusLabelColor];
