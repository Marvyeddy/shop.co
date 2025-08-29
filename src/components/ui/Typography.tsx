const textStyles = {
  size: {
    xl: "lg:text-[64px] lg:leading-16 text-[36px] leading-[34px] font-integral",
    lg: "lg:text-5xl text-[32px]",
    md: "lg:text-[40px] lg:leading-[45px] text-[32px] leading-[35px]",
    "md-pro": "lg:text-[36px] text-[24px]",
    "base-pro": "lg:text-[20px] text-[16px]",
    base: "lg:text-[16px] text-sm",
    sm: "text-sm",
    xs: "text-xs",
  },
  weight: {
    bold: "font-bold",
    regular: "font-normal",
    medium: "font-medium",
  },
  color: {
    primary: "#000000",
    "light-gray": "#00000099",
    red: "#FF3333",
    white: "#FFFFFF",
  },
} as const;

type HeaderStyles = typeof textStyles;

type HeaderProps = {
  [K in keyof HeaderStyles]?: keyof HeaderStyles[K];
} & {
  children: React.ReactNode;
  className?: string;
};

function H1({
  children,
  size = "xl",
  weight = "bold",
  color = "primary",
  className,
}: HeaderProps) {
  return (
    <h1
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </h1>
  );
}

function H2({
  children,
  size = "lg",
  weight = "bold",
  color = "primary",
  className,
}: HeaderProps) {
  return (
    <h2
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </h2>
  );
}

function H3({
  children,
  size = "md",
  weight = "bold",
  color = "primary",
  className,
}: HeaderProps) {
  return (
    <h3
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </h3>
  );
}

function H4({
  children,
  size = "md-pro",
  weight = "bold",
  color = "primary",
  className,
}: HeaderProps) {
  return (
    <h4
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </h4>
  );
}

function H5({
  children,
  size = "base-pro",
  weight = "bold",
  color = "primary",
  className,
}: HeaderProps) {
  return (
    <h5
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </h5>
  );
}

function P({
  children,
  size = "base",
  weight = "regular",
  color = "light-gray",
  className,
}: HeaderProps) {
  return (
    <p
      className={`${textStyles.size[size]} ${textStyles.weight[weight]} ${textStyles.color[color]} ${className}`}
    >
      {children}
    </p>
  );
}

const Typography = { H1, H2, H3, H4, H5, P };

export default Typography;
