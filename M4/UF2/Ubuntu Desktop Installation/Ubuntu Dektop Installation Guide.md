# 1. Install Ubuntu Desktop
## a) [[VirtualBox]]
Once [[VirtualBox]] is open, click on "New".
![](Assets/1.png)

You will be prompted with a widow to set the preperties and settings of the [[VM]], in the "Name and Operating System", fill the info (you don't need to copy this exactly, but take it as some guidance):
- Name: M4_Ubuntu_Desktop
- Folder: C:\\User\VM_Folder
- ISO Image: C:\\User\ubuntu-desktop.iso
- Type: Linux
- Version: Ubuntu (64-bit)

Also select the box next to "Skip Unattended Installation".
![](Assets/2.png)

Now to the "Hardware" section:
- RAM: 4096 MB
- Cores/CPUs: 2

![](Assets/3.png)

Last, "Hard Disk":
- Hard Disk File Location: C:\\User\VM_Folderm4_ubuntu_desktop.vdi
- Hard Disk File Size: 50 GB

![](Assets/4.png)

Now click "Finish", you may now click "Start".
![](Assets/5.png)
## b) Ubuntu Installer
When the [[VM]] powers up, Ubuntu will prompt you. By default "Try or Install Ubuntu" will be selected, press enter.
![](Assets/6.png)

After waiting, Ubuntu will prompt you again to either try or install the OS, select your language and cilck on "Install Ubuntu".
![](Assets/7.png)

Now select your keyboard layout and click "Continue".
![](Assets/8.png)

On "What apps would you like to start with?" select "Minimal installation" to have less useless apps out of the box, click "Continue".
![](Assets/9.png)

Click on "Install Now" that will format the drive and install Ubuntu on the entire drive.
![](Assets/10.png)

Click "Continue" to cofirm.
![](Assets/11.png)

It takes us to the "Where are you" section, select your region and click "Continue.
![](Assets/12.png)

Now fill all of the name and login text boxes and click "Continue".
![](Assets/13.png)

Now, we wait......
![](Assets/14.png)

Once you have waited, you can click "Restart Now" and remove the iso.
![](Assets/15.png)

# 2. Guest Additions
## a) [[VirtualBox]]
Now with the VM on, click on the "Devices" tab at the top of the window of the VM. In this menu click "Insert Guest Additions CD image..."
![](Assets/16.png)

## b) Ubuntu
Now in Ubuntu we open the Guest Additions Image from the dock in the left.
![](Assets/17.png)

Now you need to find the file `Autorun.sh`, once you have. Right click on the file and click "Run as a Program"
![](Assets/18.png)

Now Ubuntu will prompt you to insert your password to execute the script.
![](Assets/19.png)

Now eject the Guest Additions CD.
![](Assets/20.png)





