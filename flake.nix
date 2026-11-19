{
	description = "Development Environment";

	inputs = {
		nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
	};

	outputs = { self, nixpkgs }:
		let
			system = "x86_64-linux";
			pkgs = import nixpkgs { inherit system; };
		in
		{
			devShells.${system} = {
				default = pkgs.mkShell {
					packages = with pkgs; [
						nodejs_22
						openssl
						prisma-engines_7
					];
					shellHook = ''
						export PKG_CONFIG_PATH="${pkgs.openssl.dev}/lib/pkgconfig"
						export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines_7}/bin/schema-engine"
						export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines_7}/bin/query-engine"
						export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines_7}/lib/libquery_engine.node"
						export PRISMA_FMT_BINARY="${pkgs.prisma-engines_7}/bin/prisma-fmt"
					'';
				};
			};
		};
}
