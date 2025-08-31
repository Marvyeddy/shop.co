const textStyles = {
  size: {
    xl: "2xl:text-[64px] lg:text-[50px] lg:leading-16 text-[36px] leading-[34px] font-integral",
    lg: "lg:text-5xl text-[32px]",
    md: "2xl:text-[40px] lg:text-[35px] lg:leading-[45px] text-[32px] leading-[35px]",
    "md-pro": "lg:text-[36px] text-[24px]",
    "base-pro": "lg:text-[20px] text-[16px]",
    base: "2xl:text-[16px] lg:text-sm",
    sm: "text-sm",
    xs: "text-xs",
  },
  weight: {
    bold: "font-bold",
    regular: "font-normal",
    medium: "font-medium",
  },
  color: {
    primary: "text-primary",
    "light-gray": "text-light-gray",
    red: "text-red",
    white: "text-white",
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
