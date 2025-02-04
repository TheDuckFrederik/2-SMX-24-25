## 1. Installing DHCP server on Linux.
### Debian-based distros:
```
sudo apt install isc-dhcp-server
```
an alternative method:
```
sudo apt-get install isc-dhcp-server
```
### Arch-based distros:
```
sudo pacman -S isc-dhcp-server
```
### RHEL-based distros:
```
sudo yum install dhcp
```
or on newer:
```
sudo dnf install dhcp
```

## 2. Netplan.
### Editing the file:
##### We access the folder that contains the netplan:
```
cd /etc/netplan
```
##### Before editing the file, make a copy (the file can be named different things, make an ls to see the file. In my case its "50-cloud-init.yaml"):\
```
sudo cp 50-cloud-init.yaml 50-cloud-init-copy.yaml
```
##### Now we edit the file:
```
sudo nano 50-cloud-init.yaml
```
##### To set the interface address:
###### Structure:
```
network:
	ethernets:
		enp0s3:
			dhcp4: true
	version: 2
```
###### Adding an interface:
To know the name of an interface, you can use the command:
```
ip a
```
This command will show all of the interfaces like in the following example:
```
2: enp0s3:
	inet "ip"
3: enp0s8:
	inet "ip"
```
The "enp0s" followed by a number is the name of an interface, bellow it we can find the ip and map of said interface. To add a interface to the netplan, (use the edit command if you exited the editor), we will add the interface enp0s8 and give it an IP address by:
###### Enabling DHCP:
```
network:
	ethernets:
		enp0s3:
			dhcp4: true
		enp0s8:
			dhcp4: true
	version: 2
```
###### Manually giving it an IP address:
```
network:
	ethernets:
		enp0s3:
			dhcp4: true
		enp0s8:
			addresses:
				- 192.168.1.1/24
	version: 2
```
###### Applying netplan:
After making changes to the netplan, you must run the following command:
```
sudo netplan apply
```
## 3. ISC-DHCP-SERVER Defaults
### Editing the file:
##### We access the folder that contains the defaults:
```
cd /etc/default
```
##### Before editing the file, make a copy:
```
sudo cp isc-dhcp-server isc-dhcp-server-copy
```
##### Now we edit the file:
```
sudo nano isc-dhcp-server
```
#### Now we need to set up the interface for the DHCP server.
###### Structure:
```
INTERFACESv4=""
INTERFACESv6=""
```
###### Adding an interface:
In this case we have "enp0s8" so we will add it to the v4 interfaces:
```
INTERFACESv4="enp0s8"
INTERFACESv6=""
```
## 4. Editing the configuration of the DHCP server:
### Editing the file:
##### We access the folder that contains the configuration:
```
cd /etc/dhcp
```
##### Before editing the file, make a copy:
```
sudo cp dhcpd.conf dhcpd-copy.conf
```
##### Now we edit the file:
```
sudo nano dhcpd.conf
```
#### Now we need to set up the subnet and other network configuration of the DHCP server.
###### Structure:
```
ddns-update-style none;
subnet "xx.xx.xx.xx" netmask "xx.xx.xx.xx" {
	range "xx.xx.xx.xx" "xx.xx.xx.xx";
	option domain-name-server "xx.xx.xx.xx";
	option domain-name "abc.def";
	option routers "xx.xx.xx.xx";
	option subnet-mask "xx.xx.xx.xx";
	default-lease-time "s";
	max-lease-time "s";
}
```
##### Ex. Configuring 1 subnet:
###### Adding a subnet:
	- Subnet: 172.30.1.0/24
	- Range: 172.30.1.100 - 172.30.1.254
	- DNS IP: 172.30.1.1, 172.30.1.2
	- Domain name: fristName-lastName.test
	- Router: 172.30.1.1
	- Default lease time: 3600
	- Max lease time: 7200
###### Modifying the file:
```
ddns-update-style none;
subnet 172.30.1.0 netmask 255.255.255.0 {
	range 172.30.1.100 172.30.1.254;
	option domain-name-server 172.30.1.1, 172.30.1.2;
	option domain-name fristName-lastName.test;
	option routers 172.30.1.1;
	option subnet-mask 255.255.255.0;
	default-lease-time 3600;
	max-lease-time 7200;
}
```
###### Applying the config and checking it works:
After making changes to the dhcpd.conf, you must run the following commands:
###### Reseting the server:
```
sudo systemctl restart isc-dhcp-server
```
###### Checking if the configuration was succesfull:
```
sudo systemctl status isc-dhcp-server
```
If right to the "Active: " it shows "active (running)", all of the changes have been applied correctly. In the other end if to the right of "Active:" it shows "failed", something in the configuration was wrong. 
###### To have a better diagnostic you can run the following command:
```
sudo cat /var/log/syslog | grep dhcpd
```
If this throws an error, run the following instead:
```
sudo cat /var/log/syslog | grep -a dhcpd
```
